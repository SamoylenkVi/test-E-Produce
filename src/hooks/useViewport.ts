import { useState, useEffect } from 'react';
const Viewport = {
  mobile: 785,
  desktop: 1024,
};

type Viewport = {
  width: number;
  height: number;
};

type Responsive = {
  viewport: Viewport;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
};

const useResponsive = (): Responsive => {
  const [viewport, setViewport] = useState<Viewport>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobile = viewport.width <= Viewport.mobile;
  const isTablet =
    viewport.width > Viewport.mobile && viewport.width <= Viewport.desktop;
  const isDesktop = viewport.width > Viewport.desktop;

  return { viewport, isMobile, isTablet, isDesktop };
};

export default useResponsive;
