import { jwtDecode } from "jwt-decode";

export function UserIsValid(token: string) {
  console.log("the token is " + token);

  if (token) {
    const decodedToken = jwtDecode(token);

    const currentTime = new Date().getTime();
    if (decodedToken.exp && decodedToken.exp > currentTime / 1000) return true;
    else return false;
  }
}

export function GetAuthMessage(){
  
}
