import * as React from "react";

const PhotoWrapper = ({
  image,
  safariSource,
  width,
  height,
  id,
  fillColor,
  imgAlt,
  crossColor,
  crossesFlip,
  imageFlip,
  className = "",
}) => {
  const [isReady, setIsReady] = React.useState(false);
  const windowGlobal = typeof window !== "undefined" && window;

  React.useEffect(() => {
    setIsReady(true);
  }, []);

  if (!isReady) {
    return null;
  }

  const ImageAsset = () => {
    if (windowGlobal) {
      const isSafari = /^((?!chrome|android).)*safari/i.test(
        navigator.userAgent,
      );
      const imageSource = image.gatsbyImageData.images.sources[0].srcSet;
      const imageSizes = imageSource.split(",");
      // Remove 480w from imageSizes[0]
      const imageUrl = imageSizes[2].split(" ")[0];
      if (isSafari) {
        return (
          <image
            width={1}
            height={1}
            href={safariSource}
            x="0"
            y="0"
            id="image"
            preserveAspectRatio="xMidYMid slice"
            // path="url(#prefix__SVGID_1_)"
          />
        );
      } else {
        return (
          <image
            width={1}
            height={1}
            href={imageUrl}
            x="0"
            y="0"
            id="image"
            preserveAspectRatio="xMidYMid slice"
            // path="url(#prefix__SVGID_1_)"
          />
        );
      }
    }
  };

  return (
    <div className={className}>
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        // height={356.63}
        // height={"auto"}
        viewBox="0 0 387.04 356.63"
      >
        <title>{imgAlt}</title>
        <defs>
          <pattern
            id={`bg-${id}`}
            patternContentUnits="objectBoundingBox"
            width={"100%"}
            height={"100%"}
            viewBox="0 0 1 1"
            preserveAspectRatio="xMidYMid slice"
          >
            <ImageAsset />
          </pattern>
        </defs>
        <g
          style={{
            transform: `scaleX(${crossesFlip})`,
            transformOrigin: `center`,
            transformBox: `fill-box`,
          }}
        >
          <g fill={crossColor}>
            <path d="M16.43 297c-.17-.76.3-1.11 1-.8a3.12 3.12 0 011.89 2.66c.16 1.63-.34 3.29 0 4.94a1.07 1.07 0 001.26.84 3.76 3.76 0 002.34-1.45 42.59 42.59 0 003-4.13 16 16 0 001.84-5.94c.14-.77.23-1.56.43-2.32a1.66 1.66 0 01.58-.87c.46-.34.88-.16 1 .45a21.76 21.76 0 01-1.24 11 20.23 20.23 0 01-2 3.28l-.22.32c2.24-1.92 4.33-5.11 5.3-10.37v-12.69H23a5 5 0 00-4.68 5v7.75H6.78v8.6a5 5 0 005 4.68h2.92a49.51 49.51 0 011.2-5.66 9.78 9.78 0 00.53-5.29zm9.3-5.93c.22-.37.59-.26.8.15a5.05 5.05 0 01.14 4.25c-.18.49-.33 1-.53 1.6a32.46 32.46 0 01-.79-4.75 2.58 2.58 0 01.38-1.24zm-.73 3.4c.25.63.7 2.33.77 2.51.3.73-.14 1.22-.41 1.75a5.41 5.41 0 01-.81 1c-.25-1.51-.52-3-.72-4.53-.09-.66.69-1.91 1.17-.76zm-2.28 2.85c.55-1 1.34 1.51 1.52 2.15a1.22 1.22 0 01-.24 1.23c-.24.33-.51.63-.81 1-.3-1.31-1.05-3.39-.49-4.4z" />
            <path d="M43.45 299.43a5 5 0 00-5-4.79h-6.84c-1 5.27-3.06 8.45-5.3 10.37-.62.87-1.17 1.69-1.65 2.5-1.93 3.28-2.6 6.37-.58 11 0 .06 0 .12.09.12h2.65a5 5 0 004.79-5v-5.76h11.85v-8.49z" />
          </g>
          <g fill={crossColor}>
            <path d="M55.79 326c-.23-1.09.43-1.59 1.45-1.14a4.42 4.42 0 012.68 3.77c.23 2.33-.48 4.69 0 7a1.51 1.51 0 001.79 1.19 5.32 5.32 0 003.33-2.06 60.88 60.88 0 004.21-5.87c1.56-2.51 2.11-5.48 2.61-8.44.19-1.1.33-2.22.6-3.29a2.41 2.41 0 01.83-1.24c.66-.49 1.26-.23 1.41.64a30.81 30.81 0 01-1.77 15.64 28.68 28.68 0 01-2.79 4.67l-.32.45c3.19-2.73 6.17-7.26 7.54-14.75v-18.08H65.15a7.05 7.05 0 00-6.65 7v11H42.07v12.23a7.07 7.07 0 007.05 6.65h4.21a71.49 71.49 0 011.67-7.98 13.74 13.74 0 00.79-7.39zM69 317.53c.31-.54.84-.38 1.14.21a7.22 7.22 0 01.2 6c-.26.7-.47 1.42-.75 2.28a44.52 44.52 0 01-1.12-6.76 3.69 3.69 0 01.53-1.73zm-1.09 4.8c.34.89 1 3.31 1.09 3.57.42 1-.19 1.73-.59 2.48a7.06 7.06 0 01-1.14 1.47c-.36-2.15-.74-4.3-1-6.45-.15-.93.97-2.7 1.65-1.07zm-3.25 4.05c.79-1.43 1.91 2.14 2.17 3.05a1.74 1.74 0 01-.32 1.75c-.33.46-.72.9-1.15 1.46-.42-1.87-1.49-4.82-.69-6.26z" />
            <path d="M94.2 329.37a7 7 0 00-7-6.8h-9.83c-1.37 7.48-4.35 12-7.54 14.74-.87 1.23-1.66 2.4-2.34 3.55-2.75 4.66-3.69 9.06-.82 15.6 0 .08.06.17.12.17h3.78a7.07 7.07 0 006.8-7.06V341.44h16.84v-12.06z" />
          </g>
          <g fill={crossColor}>
            <path d="M49.71 271.45c-.1-.48.19-.7.64-.5a2 2 0 011.2 1.67 29.51 29.51 0 000 3.12.68.68 0 00.8.53 2.37 2.37 0 001.47-.91 29.59 29.59 0 001.87-2.61 10.33 10.33 0 001.16-3.75c.08-.48.14-1 .27-1.46a1.09 1.09 0 01.36-.55c.3-.21.56-.1.63.29a13.81 13.81 0 01-.78 6.94 13.5 13.5 0 01-1.24 2.07l-.15.2a10.77 10.77 0 003.35-6.49v-8h-5.42a3.14 3.14 0 00-3 3.13V270h-7.25v5.42a3.13 3.13 0 003.13 2.95h1.86a33.84 33.84 0 01.76-3.57 6.1 6.1 0 00.34-3.35zm5.87-3.74c.14-.24.37-.17.5.09a3.2 3.2 0 01.09 2.69c-.11.31-.21.63-.33 1a19.17 19.17 0 01-.5-3 1.59 1.59 0 01.24-.79zm-.49 2.13c.16.4.44 1.47.49 1.59.19.45-.09.76-.26 1.1a3.18 3.18 0 01-.51.65c-.16-1-.33-1.91-.46-2.86-.05-.42.44-1.2.75-.48zm-1.44 1.8c.35-.64.85.95 1 1.35a.77.77 0 01-.14.78c-.15.21-.32.4-.51.65-.19-.83-.66-2.14-.31-2.78z" />
            <path d="M66.76 273a3.13 3.13 0 00-3.13-3h-4.34a10.77 10.77 0 01-3.35 6.54c-.38.54-.74 1.06-1 1.58a6.75 6.75 0 00-.36 6.92s0 .07.06.07h1.67a3.13 3.13 0 003-3.13V278.38h7.47V273z" />
          </g>
        </g>
        {/* <path
        d="M107.86 228.69h192.75a86.49 86.49 0 0086.49-86.49V86.49A86.49 86.49 0 00300.61 0H107.86a86.49 86.49 0 00-86.49 86.49v55.71a86.49 86.49 0 0086.49 86.49z"
        fill={fillColor}
      /> */}
        <rect
          id="prefix__BLUE_BG"
          data-name="BLUE BG"
          x={57.53}
          width={329.52}
          height={205.07}
          rx={75.05}
          fill={fillColor}
        />
        <path
          data-name="SVGID"
          d="M0 180.63v76.44h106.63v51.49a44.74 44.74 0 0043.12 44.7h76.44v-96.19h59.33a44.73 44.73 0 0044.65-42.14h.08v-77.42H226.19V67.77a44.73 44.73 0 00-42.14-44.65V23h-77.42v114.51h-61.9A44.73 44.73 0 000 180.63z"
          fill={`url(#bg-${id})`}
          style={{
            transform: `scaleX(${imageFlip})`,
            transformOrigin: `center`,
            transformBox: `fill-box`,
          }}
        />
      </svg>
    </div>
  );
};

export default PhotoWrapper;
