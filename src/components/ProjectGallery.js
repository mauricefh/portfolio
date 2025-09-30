"use client";
import { useState, useMemo, useEffect } from "react";
import GalleryView from "./GalleryView";

export default function ProjectGallery({ medias }) {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Memoize medias to prevent unnecessary recalculations
  const memoizedMedias = useMemo(() => medias, [medias]);

  // Prevent body scroll when fullscreen is active
  useEffect(() => {
    if (isFullScreen) {
      // Save current scroll position
      const scrollY = window.scrollY;

      // Prevent scroll
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";

      return () => {
        // Restore scroll
        document.body.style.overflow = "";
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [isFullScreen]);

  // Safety check
  if (!memoizedMedias || memoizedMedias.length === 0) {
    return null;
  }

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? memoizedMedias.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === memoizedMedias.length - 1 ? 0 : prev + 1,
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <>
      {/* Regular Gallery */}
      <GalleryView
        medias={memoizedMedias}
        currentIndex={currentIndex}
        onPrevious={handlePrevious}
        onNext={handleNext}
        onDotClick={handleDotClick}
        onFullScreen={toggleFullScreen}
        isFullScreen={false}
      />

      {/* Fullscreen Gallery */}
      {isFullScreen && (
        <GalleryView
          medias={memoizedMedias}
          currentIndex={currentIndex}
          onPrevious={handlePrevious}
          onNext={handleNext}
          onDotClick={handleDotClick}
          onFullScreen={toggleFullScreen}
          isFullScreen={true}
        />
      )}
    </>
  );
}
