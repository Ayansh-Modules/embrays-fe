import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLinkShortContext } from "../Context/LinkShortContext";
function RedirectHandler() {
  const { LINK_SHORTENER_BASE_URL } = useLinkShortContext();
  const { shortCode } = useParams();

  useEffect(() => {
    window.location.href = LINK_SHORTENER_BASE_URL + "/go/" + shortCode;
  }, [LINK_SHORTENER_BASE_URL, shortCode]);

  return <div className="h-[100vh] w-[100vw]"> Redirecting...</div>;
}

export default RedirectHandler;
