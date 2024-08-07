import linkedicon from "../assets/favicon.svg";
import Textsearchbar from "./Textsearchbar";
import LinkCompoent from "./LinkCompoent";

function Navigation() {
  return (
    <div className=" nav-fill">
      <div className=" nav-item d-flex justify-content-between align-items-center">
        <LinkCompoent path="/">
          <img
            role="mainlogo"
            src={linkedicon}
            alt=""
            className=" nav-item btn rounded rounded-5 "
          />
        </LinkCompoent>
        <Textsearchbar />
        <LinkCompoent path="/chats">
          <i
            role="button"
            aria-label="chat/i"
            className=" bi bi-chat-dots btn  d-sm-none"
            style={{ fontSize: "1.5rem" }}
          ></i>
        </LinkCompoent>
      </div>
    </div>
  );
}

export default Navigation;
