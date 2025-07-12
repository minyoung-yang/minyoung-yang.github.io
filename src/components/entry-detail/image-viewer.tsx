import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

type ImageData = {
  src: string;
  alt: string;
  caption: string;
};

type ImageViewerProps = {
  isOpen: boolean;
  onClose: () => void;
  images: ImageData[];
  currentIndex: number;
  onIndexChange: (_index: number) => void;
};

export function ImageViewer({
  isOpen,
  onClose,
  images,
  currentIndex,
  onIndexChange,
}: ImageViewerProps) {
  const [selectedIndex, setSelectedIndex] = useState(currentIndex);

  useEffect(() => {
    setSelectedIndex(currentIndex);
  }, [currentIndex]);

  const handlePrevious = () => {
    const newIndex = selectedIndex > 0 ? selectedIndex - 1 : images.length - 1;
    setSelectedIndex(newIndex);
    onIndexChange(newIndex);
  };

  const handleNext = () => {
    const newIndex = selectedIndex < images.length - 1 ? selectedIndex + 1 : 0;
    setSelectedIndex(newIndex);
    onIndexChange(newIndex);
  };

  const handleThumbnailClick = (index: number) => {
    setSelectedIndex(index);
    onIndexChange(index);
  };

  const currentImage = images[selectedIndex];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="max-w-6xl w-[95vw] h-[95vh] max-h-[95vh] p-0 bg-black/95 flex flex-col"
        style={{
          maxWidth: "100vw",
          width: "100vw",
          height: "100vh",
          maxHeight: "100vh",
          padding: 0,
        }}
      >
        <DialogTitle className="sr-only">이미지 뷰어</DialogTitle>
        <div className="flex flex-col h-full max-h-[100vh]">
          <div
            className="flex-1 flex items-center justify-center relative p-2 sm:p-4"
            style={{ maxHeight: "calc(100vh - 160px)" }}
          >
            {currentImage && (
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src={currentImage.src}
                  alt={currentImage.alt}
                  className="max-w-full max-h-full object-contain rounded-lg"
                  style={{ maxHeight: "100%", maxWidth: "100%" }}
                />
                <NavigationButton direction="left" onClick={handlePrevious} />
                <NavigationButton direction="right" onClick={handleNext} />
              </div>
            )}
          </div>

          {currentImage && (
            <div className="px-2 sm:px-6 py-2 bg-black/50 flex-shrink-0">
              <p className="text-white text-center text-sm line-clamp-2">
                {currentImage.caption}
              </p>
              <p className="text-white/70 text-center text-xs mt-1">
                {selectedIndex + 1} / {images.length}
              </p>
            </div>
          )}

          <div className="bg-black/70 p-2 sm:p-4 flex-shrink-0">
            <div className="flex gap-2 justify-center overflow-x-auto">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => handleThumbnailClick(index)}
                  className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                    index === selectedIndex
                      ? "border-blue-400 scale-110"
                      : "border-white/30 hover:border-white/60"
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function NavigationButton({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) {
  return (
    <Button
      variant="outline"
      size="icon"
      className={`absolute top-1/2 -translate-y-1/2 ${
        direction === "left" ? "left-4" : "right-4"
      } bg-black/60 hover:bg-black/80 border-white/50 text-white shadow-lg backdrop-blur-sm cursor-pointer`}
      onClick={onClick}
    >
      {direction === "left" ? (
        <ArrowLeft className="h-6 w-6" />
      ) : (
        <ArrowRight className="h-6 w-6" />
      )}
    </Button>
  );
}
