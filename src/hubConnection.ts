import * as signalR from "@microsoft/signalr";
import Cookies from "js-cookie";

const hubConnection = new signalR.HubConnectionBuilder()
  .withUrl("https://localhost:7058/chat", {
    accessTokenFactory: () => {
      const token = Cookies.get("access_token");
      return token ?? "";
    },
  })
  .withAutomaticReconnect()
  .configureLogging(signalR.LogLevel.Information)
  .build();

hubConnection
  .start()
  .then(() => console.log("SignalR connected"))
  .catch((err) => console.error("Error connecting to SignalR:", err));

export default hubConnection;
