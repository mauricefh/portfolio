import { useState } from "react";
import { Alert } from "@/app/interfaces/alert";

const useAlert = () => {
  const [alert, setAlert] = useState<Alert>({
    show: false,
    text: "",
    type: "danger",
  });

  const showAlert = ({ text, type = "danger" }: Omit<Alert, "show">) =>
    setAlert({ show: true, text, type });

  const hideAlert = () => setAlert({ show: false, text: "", type: "danger" });

  return { alert, showAlert, hideAlert };
};

export default useAlert;
