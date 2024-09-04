import React from "react";
import * as C from "./styles";

type inputProp = {
  type: string | undefined;
  placeholder: string | undefined;
  value: string | number | readonly string[] | undefined;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

const Input = (prop: inputProp) => {
  return (
    <C.Input
      value={prop.value}
      onChange={prop.onChange}
      type={prop.type}
      placeholder={prop.placeholder}
    />
  );
};

export default Input;
