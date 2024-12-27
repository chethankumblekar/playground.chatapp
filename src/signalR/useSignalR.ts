import { useEffect, useState } from "react";
import hubConnection from "../hubConnection";
import * as signalR from "@microsoft/signalr";

interface SignalRHook {
  connectionState: string;
  hubConnection: signalR.HubConnection;
}

const useSignalR = (): SignalRHook => {
  const [connectionState, setConnectionState] =
    useState<string>("Disconnected");

  useEffect(() => {
    const startConnection = async () => {
      if (hubConnection.state === signalR.HubConnectionState.Disconnected) {
        try {
          await hubConnection.start();
          setConnectionState("Connected");
          console.log("SignalR connected!");
        } catch (error) {
          console.error("Error starting SignalR connection:", error);
          setTimeout(startConnection, 5000); // Retry connection
        }
      }
    };

    hubConnection.onclose(async () => {
      setConnectionState("Disconnected");
      console.log("SignalR disconnected. Attempting to reconnect...");
      await startConnection();
    });

    startConnection();

    return () => {
      hubConnection.stop();
    };
  }, []);

  return { hubConnection, connectionState };
};

export default useSignalR;
