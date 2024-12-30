import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./inputPrompt.scss";

interface InputPromptProps {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  sendMessage: () => Promise<void>;
}

const InputPrompt = (props: InputPromptProps) => {
  return (
    <div className="input-prompt">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={props.message}
          onChange={(e) => props.setMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit" onClick={props.sendMessage}>
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </form>
    </div>
  );
};

export default InputPrompt;
