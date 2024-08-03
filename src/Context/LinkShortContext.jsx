import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateURL } from "../Utility/CommonFunctions";
import { useQRContext } from "./QRContext";

const LinkShortenerContext = createContext();
export const useLinkShortContext = () => {
  return useContext(LinkShortenerContext);
};

function LinkShortContextProvider({ children }) {
  const navigate = useNavigate();
  const [userUrl, setUserUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [openShortURL, setOpenShortURL] = useState(false);
  const [error, setError] = useState(false);
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const CLIENT_BASE_URL = import.meta.env.VITE_CLIENT_BASE_URL;

  async function LinkShortener() {
    setLoading(true);
    let body = {
      url: `${userUrl}`,
    };
    try {
      const response = await axios.post(BASE_URL, body);

      if (response.status == 200) {
        const data = response.data;

        const urlId = data.shrinkedUrl.urlId;
        console.log(CLIENT_BASE_URL);
        console.log(BASE_URL);
        const shortURLLink = `${CLIENT_BASE_URL}/url/${urlId}`; // BASE URL should be configured via env file. This will not work on staging envs for now.
        setShortUrl(shortURLLink);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  function handleClick() {
    const result = validateURL(userUrl);
    if (result == true) {
      LinkShortener();
      setError(false);
    } else {
      setError(true);
    }
  }
  function copyShortURL() {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
  }

  const { setUrlValue, setQRlink, setQRColor } = useQRContext();
  function generateShortLinkQR() {
    setUrlValue(shortUrl);
    setQRlink(shortUrl);
    setQRColor("black");
    navigate("/qr-generator");
  }

  let value = {
    userUrl,
    shortUrl,
    setUserUrl,
    openShortURL,
    setOpenShortURL,
    error,
    setError,
    handleClick,
    copyShortURL,
    copied,
    generateShortLinkQR,
    loading,
  };
  return (
    <LinkShortenerContext.Provider value={value}>
      {children}
    </LinkShortenerContext.Provider>
  );
}

export default LinkShortContextProvider;
