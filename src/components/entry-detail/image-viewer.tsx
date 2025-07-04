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

const ImageViewer: React.FC<ImageViewerProps> = ({
  isOpen,
  onClose,
  images,
  currentIndex,
  onIndexChange,
}) => {
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
      <DialogContent className="max-w-6xl w-[90vw] h-[90vh] max-h-[90vh] p-0 bg-black/95">
        <DialogTitle className="sr-only">이미지 뷰어</DialogTitle>
        <div className="flex flex-col h-full max-h-[90vh]">
          {/* Main Image Area */}
          <div
            className="flex-1 flex items-center justify-center relative p-4"
            style={{ maxHeight: "calc(90vh - 140px)" }} // 썸네일+info 높이만큼 빼기
          >
            {currentImage && (
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src={currentImage.src}
                  alt={currentImage.alt}
                  className="max-w-full max-h-full object-contain rounded-lg"
                  style={{ maxHeight: "100%" }} // 이미지가 영역을 넘지 않게
                />

                {/* Navigation Arrows */}
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 border-white/30 text-white"
                  onClick={handlePrevious}
                >
                  <ArrowLeft className="h-6 w-6" />
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 border-white/30 text-white"
                  onClick={handleNext}
                >
                  <ArrowRight className="h-6 w-6" />
                </Button>
              </div>
            )}
          </div>

          {/* Image Info */}
          {currentImage && (
            <div className="px-6 py-2 bg-black/50 flex-shrink-0">
              <p className="text-white text-center text-sm">
                {currentImage.caption}
              </p>
              <p className="text-white/70 text-center text-xs mt-1">
                {selectedIndex + 1} / {images.length}
              </p>
            </div>
          )}

          {/* Thumbnail Strip */}
          <div className="bg-black/70 p-4 flex-shrink-0">
            <div className="flex gap-2 justify-center overflow-x-auto">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => handleThumbnailClick(index)}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
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
};

export default ImageViewer;
