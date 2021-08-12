import { useState, useEffect } from "react";

export interface IUseResponsive {
width:number;
height:number;
isMobile:boolean;
isTablet:boolean;
isDesktop:boolean;
}


export const useResponsive = ():IUseResponsive=>{ 
  const [state, setState] = useState<IUseResponsive>({
    width: 0,
    height: 0,
    isMobile:false,
    isTablet:false,
    isDesktop:false,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize():void {
      // Set window width/height to state
      setState({
        width: window.innerWidth,
        height: window.innerHeight,
        isMobile:window.innerWidth <=480,
        isTablet:window.innerWidth >480 && window.innerWidth <= 960,
        isDesktop:window.innerWidth >960 
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return state;
}