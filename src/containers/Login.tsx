import config from "../config.json";
import { CredentialResponse, GoogleOAuthProvider } from "@react-oauth/google";
import GoogleAuthButton from "../components/Login/Googlebutton";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardHeader } from "@mui/material";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import { jwtDecode } from "jwt-decode";
import { User } from "../models/Auth";
import { useContext } from "react";
import { AuthContext } from "../useContext/authProvider";

const Login = () => {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSuccess = async (response: CredentialResponse) => {
    console.log("Authentication successful:", response);
    // Extract the token from the response
    const token = response.credential;

    if (token) {
      // Send the token to the backend for verification
      try {
        const res = await fetch(config.GOOGLE_AUTH_CALLBACK_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        });

        if (!res.ok) {
          throw new Error("Response is not OK");
        }

        const data = await res.json();
        localStorage.setItem("access_token", data.token);
        const user = jwtDecode(token) as User;
        const authUser: User = {
          name: user.name,
          isAuthenticated: true,
          email: user.email,
          picture: user.picture,
        };
        setUser(authUser);
        console.log(data.token);
        navigate("/");
      } catch (error) {
        console.error("Error verifying token:", error);
      }
    }
  };

  const handleFailure = () => {
    console.error("Authentication failed:");
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
