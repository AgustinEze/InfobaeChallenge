import { useState } from "react";
import { isValidUrl } from "../../helpers/regex";

export const Image = ({ src, alt, className }) => {
  const [loaded, setLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Determinar la imagen a usar
  const finalSrc = isValidUrl(src) && !hasError ? src : "/not-available.jpg";

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Skeleton mientras carga */}
      {!loaded && !hasError && (
        <div className="absolute inset-0 bg-gray-300 animate-pulse rounded-lg" />
      )}

      <img
        src={finalSrc}
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
