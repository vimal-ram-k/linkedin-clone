import { useEffect } from "react";

function Textsearchbar() {
  useEffect(() => {
    const focusOn = () => {
      const searchbar = document.getElementById("searchbar");
      searchbar?.focus();
    };
    const inputbox = document.getElementById("textinput");

    if (inputbox) {
      inputbox.addEventListener("click", focusOn);
    }

    return () => {
      inputbox?.removeEventListener("click", focusOn);
    };
  });
  return (
    <div
      id="textinput"
      className=" textinput d-flex btn column-gap-2 bg-body-secondary  py-1 px-2"
    >
      <i className="bi bi-search"></i>
      <input
        type="text"
        placeholder="Search"
        className=" border-0 bg-transparent"
        id="searchbar"
      />
    </div>
  );
}

export default Textsearchbar;
