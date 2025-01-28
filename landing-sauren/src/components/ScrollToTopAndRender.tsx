import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTopAndRender = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();
  const [canRender, setCanRender] = useState(false);

  useEffect(() => {
    // Lleva el scroll al inicio
    window.scrollTo(0, 0);

    // Retrasa el renderizado hasta que el scroll esté en la parte superior
    const timeout = setTimeout(() => {
      setCanRender(true);
    }, 20); // 100ms para asegurarse de que el scroll se complete

    return () => {
      clearTimeout(timeout);
      setCanRender(false); // Resetea el estado al cambiar de ruta
    };
  }, [pathname]);

  // Solo renderiza el contenido cuando `canRender` es true
  return canRender ? <>{children}</> : null;
};

export default ScrollToTopAndRender;
