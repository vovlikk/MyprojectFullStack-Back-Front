import { useEffect } from "react";

export function useLockBodyScroll() {
  useEffect(() => {
    const useY = window.scrollY;

    const defaultStyles = {
      position: document.body.style.position,
      top: document.body.style.top,
      width: document.body.style.width,
      overflow: document.body.style.overflow,
    };

    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${useY}px`;
    document.body.style.width = '100%';

    return () => {
      document.body.style.overflow = defaultStyles.overflow;
      document.body.style.width = defaultStyles.width;
      document.body.style.top = defaultStyles.top;
      document.body.style.position = defaultStyles.position;

      window.scrollTo(0, useY); // <--- здесь больше нет ошибки
    };
  }, []);
}
