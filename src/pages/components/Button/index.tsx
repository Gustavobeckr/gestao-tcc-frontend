import React from "react";
import * as C from "./styles";

type buttonProp = {
  Text: String;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const Button = (prop: buttonProp) => {
  return (
    <C.Button type="button" onClick={prop.onClick}>
      {prop.Text}
    </C.Button>
  );
};

export default Button;
