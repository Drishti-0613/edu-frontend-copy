import React, { useState } from "react";
import InputField from "./InputField";

export default function PasswordInput(props){
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <InputField {...props} type={visible ? "text" : "password"} />
      <button type="button" onClick={() => setVisible(v => !v)}
        className="mt-2 text-xs text-primary-600">
        {visible ? "Hide" : "Show"} password
      </button>
    </div>
  );
}
