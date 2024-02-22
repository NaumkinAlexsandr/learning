import React, { useContext } from "react";
import { AlertContext } from "./ContextTwo";
import Alert from "@mui/material/Alert";

export default function Alerts() {
  const alert = useContext(AlertContext);

  if (!alert) return null;

  return (
    <div className="alert ">
      <Alert variant="filled" severity="info">
        Alert Context!
      </Alert>
    </div>
  );
}
