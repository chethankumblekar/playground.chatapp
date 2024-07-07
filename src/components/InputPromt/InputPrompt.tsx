import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./inputPrompt.scss";

const InputPrompt = () => {
  return (
    <div className="input-prompt">
      <form>
        <input type="text" placeholder="Type a message..." />
        <button type="submit">
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </form>
    </div>
  );
};

export default InputPrompt;
