import { useState, useEffect } from "react";

export const Image = ({ src, alt, className }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Forzar loaded=true después de 5 segundos si la imagen no carga
    const timeout = setTimeout(() => setLoaded(true), 5000);

    return () => clearTimeout(timeout); // Limpiar timeout si la imagen carga antes
  }, []);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Skeleton mientras carga */}
      {!loaded && (
        <div className="absolute inset-0 bg-gray-300 animate-pulse rounded-lg" />
      )}

      {/* Imagen con lazy loading */}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        loading="lazy"
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};
