import { useState } from "react";
import { AlertInterface } from "@/app/interfaces/alert";

const useAlert = () => {
  const [alert, setAlert] = useState<AlertInterface>({
    show: false,
    text: "",
    type: "danger",
  });

  const showAlert = ({ text, type = "danger" }: Omit<AlertInterface, "show">) =>
    setAlert({ show: true, text, type });

  const hideAlert = () => setAlert({ show: false, text: "", type: "danger" });

  return { alert, showAlert, hideAlert };
};

export default useAlert;
