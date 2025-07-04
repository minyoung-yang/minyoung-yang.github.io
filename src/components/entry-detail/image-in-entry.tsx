export type ImageInEntryProps = {
  src: string;
  alt: string;
  onImageClick?: () => void;
  caption: string;
  className?: string;
  imageClassName?: string;
  captionClassName?: string;
  width?: number;
  height?: number;
};

export const ImageInEntry: React.FC<ImageInEntryProps> = ({
  src,
  alt,
  caption,
  className = "",
  imageClassName = "",
  captionClassName = "",
  width,
  height,
  onImageClick,
}) => {
  return (
    <figure className={`flex flex-col space-y-2 ${className}`}>
      <div className="overflow-hidden rounded-lg shadow-md">
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`w-full h-auto object-cover transition-transform duration-300 hover:scale-105 ${imageClassName}`}
          onClick={onImageClick}
        />
      </div>
      <figcaption
        className={`text-sm text-gray-400 text-center px-2 leading-relaxed ${captionClassName}`}
      >
        {caption}
      </figcaption>
    </figure>
  );
};
