import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ImageOff } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  fallbackSrc,
  className,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setError(true);
  };

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <motion.div
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 bg-gray-200 rounded-lg"
        />
      )}
      
      {error ? (
        fallbackSrc ? (
          <img
            src={fallbackSrc}
            alt={alt}
            className={className}
            {...props}
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full bg-gray-100 rounded-lg">
            <ImageOff className="w-8 h-8 text-gray-400" />
          </div>
        )
      ) : (
        <motion.img
          src={src}
          alt={alt}
          className={className}
          onLoad={handleLoad}
          onError={handleError}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoading ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          {...props}
        />
      )}
    </div>
  );
};

export default ImageWithFallback; 