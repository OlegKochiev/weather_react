import React, { useEffect, useState } from 'react';

const useWidth = () => {
  const [width, setWidth] = useState(0);
  const [isMobile, setMobile] = useState(false);
  const [isDesktop, setDesktop] = useState(false);

  const handleResize = (e) => {
    setWidth(e.target.innerWidth);
    if (width < 768) {
      setMobile(true);
      setDesktop(!isMobile);
    }
    if (width >= 768) {
      setDesktop(true);
      setMobile(!isDesktop);
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [handleResize]);

  return {
    width,
    isMobile,
    isDesktop
  }
};

export default useWidth;