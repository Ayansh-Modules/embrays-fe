import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { createContext,useContext } from 'react';
const ScrollContext = createContext();
export const useScrollContext = () => {
  return useContext(ScrollContext);
};
const ScrollToComponentContext = ({children}) => {
  
  // Extracts pathname property(key) from an object
  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
return <ScrollContext.Provider>{children}</ScrollContext.Provider>
}

export default ScrollToComponentContext;