import React, { createContext, useContext } from 'react'
import axios from "axios";

 const LinkShortenerContext = createContext();
 export const useLinkShortContext = ()=> { return useContext(LinkShortenerContext) }

function LinkShortContextProvider({children}) {
const BASE_URL = "https://gnc114i9rg.execute-api.ap-south-1.amazonaws.com/dev/api/v1/shrink";
async function LinkShortener(){
 try {
  const response = await axios.post(BASE_URL)
  const data = await response.data.json()
  console.log (data)
 } catch (error) {
  
 }
  
}
let value = {
 
}
  return (
    <LinkShortenerContext.Provider value={value}>{children}</LinkShortenerContext.Provider>
  )
}

export default LinkShortContextProvider