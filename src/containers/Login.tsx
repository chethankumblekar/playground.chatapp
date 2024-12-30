import React, { useContext } from "react";
import config from "../config.json";
import { CredentialResponse, GoogleOAuthProvider } from "@react-oauth/google";
import GoogleAuthButton from "../components/Login/Googlebutton";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardHeader } from "@mui/material";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../useContext/authProvider";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { User } from "../models/Auth";

const Login: React.FC = () => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  if (!authContext) throw new Error("AuthContext is undefined.");

  const { setUser } = authContext;

  const handleSuccess = async (response: CredentialResponse) => {
    const token = response.credential;
    if (token) {
      try {
        const res = await fetch(config.GOOGLE_AUTH_CALLBACK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token }),
        });

        if (!res.ok) throw new Error("Failed to verify token");

        const data = await res.json();
        Cookies.set("access_token", data.token, {
          secure: true,
          sameSite: "strict",
        });

        const decodedUser = jwtDecode<User>(data.token);
        setUser({ ...decodedUser, isAuthenticated: true });
        navigate("/");
      } catch (error) {
        console.error("Error verifying token:", error);
      }
    }
  };

  const handleFailure = () => {
    console.error("Authentication failed");
  };

  return (
    <div
      style={{
        marginTop: "100px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card>
        <CardHeader
          avatar={<LockPersonIcon htmlColor="#40A578" />}
          title={"Sign In"}
        />
        <CardContent>
          <GoogleOAuthProvider clientId={config.GOOGLE_CLIENT_ID}>
            <GoogleAuthButton
              onSuccess={handleSuccess}
              onFailure={handleFailure}
            />
          </GoogleOAuthProvider>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
