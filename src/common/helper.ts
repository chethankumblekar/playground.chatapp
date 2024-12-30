import { format } from "date-fns";

export function getDate(time: string) {
  const tsCreatedDate = new Date(time);
  return format(tsCreatedDate, "PPP");
}
