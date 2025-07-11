type YoutubeVideoProps = {
  videoId: string;
  caption: string;
  className?: string;
  captionClassName?: string;
  height?: number;
};

export function YoutubeVideo({
  videoId,
  caption,
  className = "",
  captionClassName = "",
  height,
}: YoutubeVideoProps) {
  return (
    <figure className={`flex flex-col space-y-2 ${className}`}>
      <div
        style={{
          position: "relative",
          width: height ? `${(height * 16) / 9}px` : "100%",
          height: height ? `${height}px` : "auto",
          paddingTop: height ? "0" : "56.25%",
          maxWidth: "100%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: height ? `${height}px` : "100%",
            borderRadius: "8px",
          }}
        />
      </div>
      <figcaption
        className={`text-sm text-gray-400 text-center px-2 leading-relaxed ${captionClassName}`}
      >
        {caption}
      </figcaption>
    </figure>
  );
}
