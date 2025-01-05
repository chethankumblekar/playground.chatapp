import Cookies from "js-cookie";

export default function GetWebApiToken() {
  //   const navigate = useNavigate();
  const token = Cookies.get("access_token");
  if (token) {
    return token;
  }
  //   navigate("/login");
  return "";
}
