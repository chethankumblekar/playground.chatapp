import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function GetWebApiToken() {
  //   const navigate = useNavigate();
  const token = Cookies.get("access_token");
  if (token) {
    return token;
  }
  //   navigate("/login");
  return "";
}
