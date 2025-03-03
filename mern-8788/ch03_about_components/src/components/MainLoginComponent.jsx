import React, { useState } from "react";
import MyInput from "./comman/MyInput";
import MyButton from "./comman/MyButton";

function MainLoginComponent() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleUserNameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    console.log({ username, password });
  };
  return (
    <div>
      <div className="border p-2 m-2 rounded-3 w-50">
        <div className="mb-2">
          <MyInput
            value={username}
            onChange={handleUserNameChange}
            className={"form-control"}
          >
            Enter your username :
          </MyInput>
        </div>

        <div className="mb-2">
          <MyInput
            value={password}
            onChange={handlePasswordChange}
            className={"form-control"}
            type="password"
          >
            Enter your password :
          </MyInput>
        </div>
        <div className="d-flex justify-content-between">
          <MyButton className="btn btn-secondary">Cancle </MyButton>

          <MyButton className="btn btn-primary" onClick={handleLogin}>
            Login{" "}
          </MyButton>
        </div>
      </div>
    </div>
  );
}

export default MainLoginComponent;
