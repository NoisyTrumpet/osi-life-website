import * as React from "react";

const PhotoWrapper = ({ image, width, height, id, fillColor, imgAlt }) => {
  return (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      // width={387.1}
      // height={399.94}
      viewBox="0 0 387.1 399.94"
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
          <image
            width={1}
            height={1}
            href={image}
            x="0"
            y="0"
            id="image"
            preserveAspectRatio="xMidYMid slice"
            // path="url(#prefix__SVGID_1_)"
          />
        </pattern>
      </defs>
      <g fill={fillColor}>
        <path d="M70.65 334.17c-.19-.86.33-1.24 1.13-.89a3.48 3.48 0 012.11 3c.18 1.83-.38 3.68 0 5.52a1.19 1.19 0 001.42.93 4.13 4.13 0 002.61-1.62 47.16 47.16 0 003.31-4.61 18.22 18.22 0 002.06-6.63c.15-.87.25-1.75.47-2.59a1.81 1.81 0 01.65-1c.52-.38 1-.18 1.11.5a24.28 24.28 0 01-1.39 12.29 23.1 23.1 0 01-2.19 3.67l-.26.36c2.51-2.15 4.85-5.7 5.93-11.58v-14.2h-9.6a5.56 5.56 0 00-5.23 5.54v8.65H59.86v9.6a5.56 5.56 0 005.54 5.23h3.3a57.77 57.77 0 011.33-6.32 10.84 10.84 0 00.62-5.85zm10.38-6.63c.24-.42.66-.3.89.17a5.69 5.69 0 01.16 4.75c-.2.55-.37 1.12-.59 1.79a35.2 35.2 0 01-.88-5.31 3 3 0 01.42-1.4zm-.85 3.77c.27.71.77 2.6.86 2.81.33.81-.15 1.36-.46 1.95a5.66 5.66 0 01-.9 1.15c-.28-1.69-.58-3.37-.81-5.06-.11-.74.77-2.12 1.31-.85zm-2.56 3.19c.62-1.13 1.5 1.68 1.71 2.39a1.39 1.39 0 01-.25 1.38c-.26.36-.57.7-.91 1.14-.34-1.46-1.17-3.78-.55-4.91z" />
        <path d="M100.82 336.85a5.55 5.55 0 00-5.54-5.35H87.6c-1.08 5.88-3.42 9.44-5.93 11.58-.68 1-1.31 1.88-1.84 2.79-2.16 3.66-2.9 7.11-.64 12.25 0 .07 0 .14.1.14h3a5.55 5.55 0 005.35-5.54v-6.42h13.22v-9.28a.67.67 0 000-.2z" />
      </g>
      <g fill={fillColor}>
        <path d="M20.25 365.68c-.27-1.22.47-1.77 1.61-1.27a4.94 4.94 0 013 4.21c.25 2.6-.54 5.23 0 7.85a1.7 1.7 0 002 1.33 5.88 5.88 0 003.71-2.3 66.28 66.28 0 004.7-6.56c1.74-2.8 2.35-6.12 2.92-9.42.21-1.23.36-2.48.67-3.68a2.55 2.55 0 01.93-1.38c.74-.54 1.4-.26 1.57.71a34.46 34.46 0 01-2 17.47 32.6 32.6 0 01-3.11 5.21l-.36.51c3.56-3.05 6.89-8.11 8.42-16.47v-20.18H30.69a7.89 7.89 0 00-7.43 7.87v12.29H4.91v13.66a7.89 7.89 0 007.87 7.43h4.69a78 78 0 011.9-9 15.41 15.41 0 00.88-8.28zm14.76-9.42c.35-.59.93-.43 1.27.23a8.1 8.1 0 01.23 6.75c-.29.78-.53 1.58-.84 2.54a50 50 0 01-1.25-7.54 4 4 0 01.59-1.98zm-1.22 5.36c.38 1 1.1 3.7 1.22 4 .47 1.15-.22 1.93-.66 2.77a8.1 8.1 0 01-1.28 1.64c-.39-2.4-.82-4.79-1.16-7.19-.13-1.06 1.11-3.04 1.88-1.22zm-3.63 4.53c.89-1.6 2.13 2.38 2.42 3.4a2 2 0 01-.35 2c-.37.51-.8 1-1.29 1.62-.48-2.12-1.67-5.42-.78-7.02z" />
        <path d="M63.13 369.49a7.89 7.89 0 00-7.88-7.6H44.34c-1.54 8.36-4.86 13.41-8.42 16.47-1 1.37-1.86 2.68-2.62 4-3.07 5.2-4.12 10.11-.91 17.41.06.09.07.2.14.2h4.21a7.89 7.89 0 007.6-7.88v-9.08h18.8v-13.2a2.62 2.62 0 000-.28z" />
      </g>
      <g fill={fillColor}>
        <path d="M40.83 305.61c-.12-.54.21-.78.72-.56a2.2 2.2 0 011.33 1.87c.11 1.15-.24 2.32 0 3.48a.76.76 0 00.9.59 2.66 2.66 0 001.65-1 30.19 30.19 0 002.09-2.91 11.61 11.61 0 001.3-4.18c.09-.55.16-1.1.3-1.63a1.17 1.17 0 01.41-.61c.33-.24.62-.11.7.32a15.25 15.25 0 01-.88 7.75 15 15 0 01-1.38 2.31l-.16.23c1.58-1.36 3.06-3.6 3.74-7.31v-9h-6a3.5 3.5 0 00-3.3 3.49v5.49h-8.14v6.05a3.5 3.5 0 003.49 3.3h2.09a36.68 36.68 0 01.84-4 7.22 7.22 0 00.3-3.68zm6.55-4.17c.15-.26.41-.19.56.1a3.56 3.56 0 01.1 3c-.13.35-.23.7-.37 1.13a21.25 21.25 0 01-.55-3.35 1.77 1.77 0 01.26-.9zm-.54 2.37c.17.45.49 1.64.54 1.77.21.51-.1.86-.29 1.23a3.32 3.32 0 01-.57.73c-.18-1.06-.37-2.13-.51-3.19-.06-.47.53-1.34.83-.54zm-1.61 2c.39-.71.95 1.06 1.08 1.51a.88.88 0 01-.16.87c-.17.23-.36.44-.57.72-.22-.91-.74-2.37-.35-3.09z" />
        <path d="M59.87 307.31a3.5 3.5 0 00-3.5-3.37h-4.83c-.68 3.71-2.16 6-3.74 7.31-.43.61-.82 1.19-1.16 1.76a7.56 7.56 0 00-.41 7.73s0 .09.06.09h1.87a3.5 3.5 0 003.37-3.5v-4.03h8.34v-5.88a.76.76 0 000-.14z" />
      </g>
      <path
        d="M107.86 228.69h192.75a86.49 86.49 0 0086.49-86.49V86.49A86.49 86.49 0 00300.61 0H107.86a86.49 86.49 0 00-86.49 86.49v55.71a86.49 86.49 0 0086.49 86.49z"
        fill={fillColor}
      />
      <path
        data-name="SVGID"
        d="M368.24 201.42a49.88 49.88 0 00-49.85-48.08h-69V25.7h-86.36v.09a49.89 49.89 0 00-47 49.8V153.35H.03v86.33h.09a49.89 49.89 0 0049.8 47h66.16v107.3h85.24a49.88 49.88 0 0048.08-49.85v-57.47h118.88v-85.24z"
        fill={`url(#bg-${id})`}
      />
    </svg>
  );
};

export default PhotoWrapper;
