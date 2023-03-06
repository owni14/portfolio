import React, { useState } from "react";
import { IProps } from "../types";

const ClickState: any = React.createContext({
  isClick: false,
});

export const ClickStateProvider = (props: IProps) => {
  const [isClick, setIsClick] = useState<boolean>(false);

  return (
    <ClickState.Provider value={[isClick, setIsClick]}>
      {props.children}
    </ClickState.Provider>
  );
};

export default ClickState;
