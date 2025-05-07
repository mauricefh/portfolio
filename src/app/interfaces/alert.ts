export interface AlertInterface {
  show: boolean;
  text: string;
  type: "danger" | "success" | "warning" | "info";
}
