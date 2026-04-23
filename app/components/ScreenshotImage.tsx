"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface ScreenshotImageItem {
  src: string;
  alt: string;
}

interface ScreenshotImageProps {
  images: ScreenshotImageItem[];
  aspectRatio?: "4/3" | "16/9" | "1/1" | "3/4" | "9/16";
  className?: string;
}

export function ScreenshotImage({
  images,
  aspectRatio = "16/9",
  className = "",
}: ScreenshotImageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") setIsOpen(false);
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "ArrowLeft") goToPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, goToNext, goToPrev]);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`group relative overflow-hidden cursor-pointer block w-full ${className}`}
        style={{ aspectRatio }}
        aria-label={`View ${images[0].alt} full size`}
      >
        <div className="absolute inset-0 bg-card/50 group-hover:bg-card transition-colors duration-300" />
        <Image
          src={images[0].src}
          alt={images[0].alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
        {images.length > 1 && (
          <div className="absolute bottom-3 left-3 bg-background/80 backdrop-blur-sm px-2 py-1 text-[10px] text-foreground/60 tracking-widest uppercase">
            {images.length} images
          </div>
        )}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-background/90 backdrop-blur-sm px-4 py-2">
            <svg
              className="w-5 h-5 text-foreground/80"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
              />
            </svg>
          </div>
        </div>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery"
        >
          <div
            className="absolute inset-0 bg-background/95 backdrop-blur-md animate-fade-in"
            onClick={() => setIsOpen(false)}
          />
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 z-[101] p-2 text-foreground/60 hover:text-foreground transition-colors"
            aria-label="Close"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrev();
                }}
                className="absolute left-4 z-[101] p-2 text-foreground/40 hover:text-foreground transition-colors"
                aria-label="Previous image"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="absolute right-4 z-[101] p-2 text-foreground/40 hover:text-foreground transition-colors"
                aria-label="Next image"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </>
          )}

          <div
            // className="relative z-[101] max-w-[90vw] max-h-[90vh] animate-scale-in"
            style={{ aspectRatio }}
          >
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-[101]">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(index);
                }}
                className={`transition-all duration-300 ${
                  index === currentIndex
                    ? "w-6 h-0.5 bg-foreground"
                    : "w-1 h-0.5 bg-foreground/30 hover:bg-foreground/60"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>

          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-xs text-foreground/40 tracking-widest uppercase">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}