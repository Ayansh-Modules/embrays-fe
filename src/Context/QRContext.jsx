import React, { createContext, useContext, useState } from "react";

const QRLinkContext = createContext();
export const useQRContext = () => {
  return useContext(QRLinkContext);
};

function QRContextProvider({ children }) {
  const [QRlink, setQRlink] = useState("");
  const [urlValue, setUrlValue] = useState("");
  const [QRColor, setQRColor] = useState("gray");

  function generateQRLink(value) {
    if (QRColor == "gray") {
      setQRColor("#00000");
    }
    setQRlink(value);
  }

  // download function
  const downloadQrCode = () => {
    if (QRColor == "gray") {
      return;
    }
    const svgElement = document.querySelector("#qr-code-download");

    if (!svgElement) return;
    // convert svg to image
    const img = new Image();
    const svgStr = new XMLSerializer().serializeToString(svgElement);
    img.src = "data:image/svg+xml;base64," + window.btoa(svgStr);
    img.onload = () => {
      // write image to canvas
      const canvas = document.createElement("canvas");
      // size of the image
      const size = 500;
      // padding for easier scan
      const padding = 20;
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");
      // color of the padding
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, size, size);
      ctx.drawImage(
        img,
        padding,
        padding,
        size - padding * 2,
        size - padding * 2
      );
      // add canvas to <a>
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "QR code.png";
      // add to body, click to download and remove it from body
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  };

  let value = {
    QRlink,
    setQRlink,
    QRColor,
    setQRColor,
    generateQRLink,
    downloadQrCode,
    urlValue,
    setUrlValue,
  };
  return (
    <QRLinkContext.Provider value={value}>{children}</QRLinkContext.Provider>
  );
}

export default QRContextProvider;
