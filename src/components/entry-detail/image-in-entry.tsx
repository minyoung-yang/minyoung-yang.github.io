"use client";
export type ImageInEntryProps = {
  src: string | string[];
  alt: string | string[];
  onImageClick?: (_imgSrc: string) => void;
  caption: string;
  className?: string;
  imageClassName?: string;
  captionClassName?: string;
  height?: number;
  aspectRatio?: string;
};

export function ImageInEntry({
  src,
  alt,
  caption,
  className = "",
  imageClassName = "",
  captionClassName = "",
  height,
  aspectRatio = "4 / 3",
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
            className={`overflow-hidden flex rounded-lg bg-gray-100 ${
              height ? "max-w-full" : "flex-1 min-w-0"
            }`}
            // 로드 전에도 크기가 정해지도록 비율 고정 (layout shift 방지)
            style={{
              aspectRatio,
              height: height ? `${height}px` : undefined,
            }}
          >
            <img
              src={imgSrc}
              alt={altArr[idx] || ""}
              loading="lazy"
              decoding="async"
              className={`w-full h-full object-cover transition-transform duration-300 hover:scale-105 ${imageClassName} cursor-pointer`}
              onClick={() => {
                onImageClick?.(imgSrc);
              }}
            />
          </div>
        ))}
      </div>
      {caption.length > 0 && (
        <figcaption
          className={`text-sm text-gray-500 text-center px-2 leading-relaxed ${captionClassName}`}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
