import { format } from "date-fns";

export function getDate() {
  const tsCreatedDate = new Date();
  return format(tsCreatedDate, "PPPP");
}
