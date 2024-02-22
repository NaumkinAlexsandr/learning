import React, { useState } from "react";
import Alerts from "./alert";
import NewContext from "./newContext";

export const AlertContext = React.createContext();

function Context() {
  const [alert, setAlert] = useState(false);

  const toggleAlert = () => setAlert((prev) => !prev);

  return (
    <AlertContext.Provider value={alert}>
      <>
        <Alerts />
        <NewContext toggle={toggleAlert} />
      </>
    </AlertContext.Provider>
  );
}

export default Context;
