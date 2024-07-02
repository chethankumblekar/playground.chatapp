import { CredentialResponse, GoogleLogin } from "@react-oauth/google";

interface GoogleAuthProps {
  onSuccess: (credentialResponse: CredentialResponse) => void;
  onFailure: () => void;
}

const GoogleAuthButton = (props: GoogleAuthProps) => {
  return (
    <GoogleLogin
      onSuccess={props.onSuccess}
      onError={props.onFailure}
      auto_select
    />
  );
};

export default GoogleAuthButton;
