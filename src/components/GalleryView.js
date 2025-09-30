import Image from "next/image";

export default function GalleryView({
  medias,
  currentIndex,
  onPrevious,
  onNext,
  onDotClick,
  onFullScreen,
  isFullScreen = false,
}) {
  if (!medias || medias.length === 0) {
    return null;
  }

  const currentMedia = medias[currentIndex];
  const showCounter = medias.length > 5; // Show counter instead of dots if more than 5 items

  return (
    <div
      className={`${
        isFullScreen
          ? "fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center"
          : "images-container aspect-[4/3] relative rounded-lg overflow-hidden"
      }`}
      onClick={isFullScreen ? onFullScreen : undefined}
    >
      {/* Close or Fullscreen icon */}
      {isFullScreen ? (
        <div className="absolute right-4 top-4 z-10 bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all cursor-pointer hover:scale-110">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="size-6"
            onClick={onFullScreen}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
      ) : (
        <div className="absolute right-0 top-0 m-1 z-10 bg-white bg-opacity-70 rounded-md p-1 hover:bg-opacity-90 transition-all cursor-pointer hover:scale-110">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
            onClick={onFullScreen}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
            />
          </svg>
        </div>
      )}

      {/* Left chevron */}
      <div
        className={`${
          isFullScreen
            ? "left-4 bg-black bg-opacity-50 p-3"
            : "left-0 m-1 bg-white bg-opacity-70 p-1"
        } absolute top-1/2 -translate-y-1/2 z-10 rounded-full hover:bg-opacity-90 transition-all cursor-pointer hover:scale-110`}
        onClick={(e) => {
          if (isFullScreen) e.stopPropagation();
          onPrevious();
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={isFullScreen ? 2 : 1.5}
          stroke={isFullScreen ? "white" : "currentColor"}
          className={isFullScreen ? "size-8" : "size-5"}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </div>

      {/* Right chevron */}
      <div
        className={`${
          isFullScreen
            ? "right-4 bg-black bg-opacity-50 p-3"
            : "right-0 m-1 bg-white bg-opacity-70 p-1"
        } absolute top-1/2 -translate-y-1/2 z-10 rounded-full hover:bg-opacity-90 transition-all cursor-pointer hover:scale-110`}
        onClick={(e) => {
          if (isFullScreen) e.stopPropagation();
          onNext();
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={isFullScreen ? 2 : 1.5}
          stroke={isFullScreen ? "white" : "currentColor"}
          className={isFullScreen ? "size-8" : "size-5"}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>

      {/* Counter or Dot indicators */}
      {showCounter ? (
        // Counter display for many items
        <div
          className={`${
            isFullScreen
              ? "bottom-8 text-base px-4 py-2"
              : "bottom-2 text-sm px-3 py-1.5"
          } absolute left-1/2 -translate-x-1/2 z-10 bg-black bg-opacity-60 rounded-full text-white font-medium`}
        >
          {currentIndex + 1} / {medias.length}
        </div>
      ) : (
        // Dot indicators for few items
        <div
          className={`${
            isFullScreen ? "bottom-8 gap-3" : "bottom-2 gap-2"
          } absolute left-1/2 -translate-x-1/2 flex z-10 bg-black bg-opacity-40 rounded-full px-3 py-2`}
        >
          {medias.map((media, index) => (
            <svg
              key={media.id}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className={`${
                isFullScreen ? "size-3" : "size-2"
              } cursor-pointer transition-opacity duration-300 ${
                index === currentIndex ? "opacity-100" : "opacity-50"
              } hover:opacity-75`}
              onClick={(e) => {
                if (isFullScreen) e.stopPropagation();
                onDotClick(index);
              }}
            >
              <circle cx="12" cy="12" r="8" />
            </svg>
          ))}
        </div>
      )}

      {/* Media content */}
      {isFullScreen ? (
        <div
          className="relative max-w-7xl max-h-screen w-full h-full flex items-center justify-center p-12"
          onClick={(e) => e.stopPropagation()}
        >
          {currentMedia.type === "video" ? (
            <video
              key={currentMedia.id}
              src={currentMedia.src}
              className="max-w-full max-h-full object-contain"
              controls
              autoPlay
              loop
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <Image
              key={currentMedia.id}
              src={currentMedia.src}
              alt={currentMedia.alt}
              width={1920}
              height={1080}
              className="max-w-full max-h-full object-contain"
            />
          )}
        </div>
      ) : currentMedia.type === "video" ? (
        <video
          key={currentMedia.id}
          src={currentMedia.src}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
          controls
          autoPlay
          loop
          muted
        >
          Your browser does not support the video tag.
        </video>
      ) : (
        <Image
          key={currentMedia.id}
          src={currentMedia.src}
          alt={currentMedia.alt}
          priority
          fill
          className="object-cover transition-opacity duration-300"
        />
      )}
    </div>
  );
}
