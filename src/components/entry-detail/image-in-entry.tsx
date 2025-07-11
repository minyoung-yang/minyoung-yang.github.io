export type ImageInEntryProps = {
  src: string | string[];
  alt: string | string[];
  onImageClick?: (_imgSrc: string) => void;
  caption: string;
  className?: string;
  imageClassName?: string;
  captionClassName?: string;
  height?: number;
};

export function ImageInEntry({
  src,
  alt,
  caption,
  className = "",
  imageClassName = "",
  captionClassName = "",
  height,
  onImageClick,
}: ImageInEntryProps) {
  const srcArr = Array.isArray(src) ? src : [src];
  const altArr = Array.isArray(alt) ? alt : [alt];
  return (
    <figure className={`flex flex-col space-y-2 ${className}`}>
      <div className={`flex gap-4 w-full justify-center`}>
        {srcArr.map((imgSrc, idx) => (
          <div
            key={imgSrc + idx}
            className="overflow-hidden flex rounded-lg"
            style={{
              height: height ?? `${height}px`,
            }}
          >
            <img
              src={imgSrc}
              alt={altArr[idx] || ""}
              height={height}
              className={`object-cover transition-transform duration-300 hover:scale-105 ${imageClassName} cursor-pointer`}
              onClick={() => {
                console.log("Image clicked:", imgSrc);
                onImageClick?.(imgSrc);
              }}
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
