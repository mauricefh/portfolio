export interface Alert {
  show: boolean;
  text: string;
  type: "danger" | "success" | "warning" | "info";
}
