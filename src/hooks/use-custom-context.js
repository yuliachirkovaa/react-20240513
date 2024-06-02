import { useState } from "react";

export const useCustomContext = (defaultContext) => {
  const [context, setContext] = useState(defaultContext);

  const changeContext = (alternativeContext) => {
    if (context === defaultContext) {
      setContext(alternativeContext);
    } else {
      setContext(defaultContext);
    }
  };

  return [ context, changeContext ];
};
