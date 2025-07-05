export type ImageInEntryProps = {
  src: string | string[];
  alt: string | string[];
  onImageClick?: () => void;
  caption: string;
  className?: string;
  imageClassName?: string;
  captionClassName?: string;
  width?: number;
  height?: number;
};

export function ImageInEntry({
  src,
  alt,
  caption,
  className = "",
  imageClassName = "",
  captionClassName = "",
  width,
  height,
  onImageClick,
}: ImageInEntryProps) {
  const srcArr = Array.isArray(src) ? src : [src];
  const altArr = Array.isArray(alt) ? alt : [alt];
  return (
    <figure className={`flex flex-col space-y-2 ${className}`}>
      <div className={`flex gap-4 w-full`}>
        {srcArr.map((imgSrc, idx) => (
          <div
            key={imgSrc + idx}
            className="flex-1 overflow-hidden rounded-lg shadow-md flex"
            style={{ minWidth: 0 }}
          >
            <img
              src={imgSrc}
              alt={altArr[idx] || ""}
              width={width}
              height={height}
              className={`w-full object-cover transition-transform duration-300 hover:scale-105 ${imageClassName} cursor-pointer`}
              style={{ objectFit: "cover" }}
              onClick={onImageClick ? () => onImageClick() : undefined}
            />
          </div>
        ))}
      </div>
      <figcaption
        className={`text-sm text-gray-400 text-center px-2 leading-relaxed ${captionClassName}`}
      >
        {caption}
      </figcaption>
    </figure>
  );
}
