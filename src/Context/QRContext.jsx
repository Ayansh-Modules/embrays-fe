import React, { createContext, useContext, useState } from 'react'

const  QRLinkContext = createContext();
export const useQRContext = ()=>{return useContext ( QRLinkContext)}

function QRContextProvider({children}) {
const [QRlink,setQRlink] = useState("")
const [QRColor, setQRColor] = useState("gray");

function generateQRLink(value){
    if(QRColor=="gray"){
        setQRColor("#00000")
    }
    setQRlink(value)
}
let value = {
    QRlink,setQRlink,QRColor, setQRColor,generateQRLink
}
  return (
    <QRLinkContext.Provider value={value}>{children}</QRLinkContext.Provider>
  )
}

export default QRContextProvider