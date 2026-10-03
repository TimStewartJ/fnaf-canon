import { useLocation } from "react-router-dom";
import { Missing } from "../components/ui";

/** Any address that is no page at all. (Unknown chapters, records, people, places and sources use the same layout.) */
export default function NotFound() {
  const { pathname } = useLocation();
  return <Missing id={pathname} />;
}
