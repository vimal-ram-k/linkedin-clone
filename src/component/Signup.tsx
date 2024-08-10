import React, { useRef, useState } from "react";

function Signup() {
  const userRefEmail = useRef<HTMLInputElement>(null);
  const userRefPassword = useRef(null);

  const [userAccount, setUserAccount] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState<boolean>(false);

  const isEmailAccount = () => {
    const email = userRefEmail.current?.value;
    const form = document.getElementById("signup");

    if (email) {
      setUserAccount((prev) => ({
        ...prev,
        username: email,
      }));
      const isEmail = /\w\S*.\.com$/gm.test(email);
      if (!isEmail) {
        setError(true);
        form?.classList.add("error");
      } else {
        setError(false);
        form?.classList.remove("error");
      }
    }
  };

  return (
    <form
      id="signup"
      action=""
      className=" w-100 d-flex flex-column align-items-center border  rounded-5 py-3 justify-content-center row-gap-3"
    >
      <h1 className=" py-2 text-center">SignIn</h1>
      <input
        name="username"
        id="username"
        type="email"
        data-testid="username"
        className=" px-3 py-2 w-75 d-sm-none d-md-block"
        ref={userRefEmail}
        placeholder="Enter email or phone"
        onBlur={isEmailAccount}
      />
      {error && (
        <h1 role="alert" className=" alert bg-danger popover-arrow">
          Check Your Account
        </h1>
      )}
      <input
        type="password"
        name="password"
        id="password"
        className=" px-3 py-2 w-75"
        placeholder="Password"
        ref={userRefPassword}
      />
    </form>
  );
}

export default Signup;
