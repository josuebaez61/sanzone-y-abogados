import { useEffect, useState } from "react";
import { Breakpoint } from "@/models/breakpoint";

interface BreakpointInfo {
  currentBreakpoint: Breakpoint;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  width: number;
}

export const useBreakpoints = (): BreakpointInfo => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Set initial width
    setWidth(window.innerWidth);

    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Determine current breakpoint
  const getCurrentBreakpoint = (): Breakpoint => {
    if (width >= Breakpoint.XXL) return Breakpoint.XXL;
    if (width >= Breakpoint.XL) return Breakpoint.XL;
    if (width >= Breakpoint.LG) return Breakpoint.LG;
    if (width >= Breakpoint.MD) return Breakpoint.MD;
    if (width >= Breakpoint.SM) return Breakpoint.SM;
    return Breakpoint.SM; // Default to SM for very small screens
  };

  const currentBreakpoint = getCurrentBreakpoint();

  return {
    currentBreakpoint,
    isMobile: width < Breakpoint.MD,
    isTablet: width >= Breakpoint.MD && width < Breakpoint.LG,
    isDesktop: width >= Breakpoint.LG,
    width,
  };
};
