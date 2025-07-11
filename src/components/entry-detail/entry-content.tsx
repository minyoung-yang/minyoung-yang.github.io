import React, { cloneElement, isValidElement, useMemo } from "react";
import { useState } from "react";
import { ImageViewer } from "./image-viewer";
import { ImageInEntryProps } from "./image-in-entry";
import { Image } from "@/types/blog";

type EntryContentProps = {
  content: React.ReactNode;
};

function enhanceChildren(
  node: React.ReactNode,
  onImageClick: (_imgSrc: string) => void,
  foundImages: Image[],
): React.ReactNode {
  if (Array.isArray(node)) {
    return node.map((child, idx) => {
      const enhanced = enhanceChildren(child, onImageClick, foundImages);
      if (isValidElement(enhanced) && enhanced.key == null) {
        return cloneElement(enhanced, { key: idx });
      }
      return enhanced;
    });
  }
  if (isValidElement(node)) {
    if ((node.type as any).name === "ImageInEntry") {
      const { src, alt, caption } = node.props as ImageInEntryProps;
      const srcArr = Array.isArray(src) ? src : [src];
      const altArr = Array.isArray(alt) ? alt : [alt];
      srcArr.forEach((imgSrc, idx) => {
        foundImages.push({
          src: imgSrc,
          alt: altArr[idx] || "",
          caption,
        });
      });

      return cloneElement(node as React.ReactElement<ImageInEntryProps>, {
        onImageClick,
      });
    }
    // children prop이 있으면 재귀적으로 처리
    if (
      (node as React.ReactElement<any>).props &&
      (node as React.ReactElement<any>).props.children
    ) {
      return cloneElement(node as React.ReactElement<any>, {
        children: enhanceChildren(
          (node as React.ReactElement<any>).props.children,
          onImageClick,
          foundImages,
        ),
      });
    }
    return node;
  }
  return node;
}

export function EntryContent({ content }: EntryContentProps) {
  const [isImageViewerOpen, setIsImageViewerOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [enhancedContent, images] = useMemo(() => {
    const foundImages: Image[] = [];
    const enhanced = enhanceChildren(
      content,
      (imgSrc: string) => {
        const idx = foundImages.findIndex((image) => image.src === imgSrc);
        setCurrentImageIndex(idx);
        setIsImageViewerOpen(true);
      },
      foundImages,
    );
    return [enhanced, foundImages];
  }, [content]);

  return (
    <>
      {enhancedContent}
      <ImageViewer
        isOpen={isImageViewerOpen}
        onClose={() => setIsImageViewerOpen(false)}
        images={images.map((img) => ({
          src: img.src,
          alt: img.alt,
          caption: img.caption,
        }))}
        currentIndex={currentImageIndex}
        onIndexChange={setCurrentImageIndex}
      />
    </>
  );
}
