import { useState } from "react";

export const Image = ({ src, alt, className }) => {
  const [loaded, setLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Skeleton mientras carga */}
      {!loaded && !hasError && (
        <div className="absolute inset-0 bg-gray-300 animate-pulse rounded-lg" />
      )}

      <img
        src={src && !hasError ? src : undefined}
        alt={alt || "Imagen no disponible"}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => {
          setHasError(true);
          setLoaded(true); 
        }}
      />
    </div>
  );
};
