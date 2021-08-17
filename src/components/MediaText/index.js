import React from "react";
import PropTypes from "prop-types";

import { Box, Grid, GridItem, Heading, Flex } from "@chakra-ui/react";
import PhotoWrapper from "SVG/PhotoWrapper";
import RichText from "Components/RichText";
import MultiHandCross from "SVG/MultiHandCross";

const MediaText = ({
  title,
  content,
  photo,
  imageSubCaption,
  id,
  path,
  variant,
}) => {
  if (path === "/services-details") {
    return (
      <Flex
        flexDirection={{
          base: `column-reverse`,
          xl: (variant === "Secondary" && `row-reverse`) || `row`,
          "2xl": variant === "Secondary" && `row-reverse`,
        }}
        pb={`4rem`}
        bg={variant === "Secondary" && `lightGrayBG`}
        borderTopLeftRadius={variant === "Secondary" && 140}
        key={id}
      >
        <Box
          flex={[`100%`, `100%`, `100%`, `60%`, `60%`]}
          px={[2, 2, 8, 8, 8]}
          py={2}
          mx={4}
          my={`auto`}
        >
          <Box maxW={800} mx={`auto`}>
            <Heading color="primary">{title}</Heading>
            <Box
              sx={{
                h2: {
                  fontSize: "2.25rem !important",
                  fontWeight: "700 !important",
                  lineHeight: "1.2 !important",
                  color: "#00ADBC",
                  padding: "1rem 0 !important",
                },
                p: { padding: [".5rem 0 !important"] },
              }}
            >
              <RichText content={content} />
            </Box>
          </Box>
        </Box>
        <Box
          flex={{ base: `100%`, lg: `100%`, xl: `100%` }}
          mt={`auto`}
          mb={8}
          overflow="hidden"
          alignSelf={variant === "Primary" && "flex-end"}
          sx={{
            svg: {
              width: ["680px", "680px", "680px", "750px", "750px"],
              maxWidth: "100%",
              height: "auto",
              top: "0",
              left: variant === "Primary" && "20%",
              right: variant === "Secondary" && "20%",
              transform: variant === "Secondary" && "scaleX(-1)",
            },
          }}
        >
          <PhotoWrapper
            image={photo.gatsbyImageData.images.fallback.src}
            width={photo.gatsbyImageData.width}
            height={photo.gatsbyImageData.height}
            imgAlt={photo.title}
            id={photo.id}
            fillColor={(variant === "Secondary" && "#00ADBC") || "#FFA500"}
            crossColor={variant === "Secondary" ? "#00ADBC" : "#FFA500"}
          />
        </Box>
      </Flex>
    );
  }
  if (path === "/benefits") {
    return (
      <Flex
        flexDirection={{
          base: `column-reverse`,
          lg: (variant === "Primary" && `row-reverse`) || `row`,
          xl: (variant === "Primary" && `row-reverse`) || `row`,
          "2xl": variant === "Primary" && `row-reverse`,
        }}
        pb={`4rem`}
        bg={variant === "Secondary" && `lightGrayBG`}
        borderTopLeftRadius={variant === "Secondary" && 140}
        key={id}
      >
        <Box
          flex={{ base: `100%`, xl: `60%` }}
          px={[2, 2, 8, 8, 8]}
          py={2}
          mx={4}
          my={`auto`}
        >
          <Box maxW={800} mx={`auto`}>
            <Heading color="primary">{title}</Heading>
            <Box
              sx={{
                h2: {
                  fontSize: "2.25rem !important",
                  fontWeight: "700 !important",
                  lineHeight: "1.2 !important",
                  color: "#00ADBC",
                  padding: "1rem 0 !important",
                },
                p: { padding: [".5rem 0 !important"] },
              }}
            >
              <RichText content={content} />
            </Box>
          </Box>
          <Box
            display={{
              base: `none`,
              xl: (title === "Payor" && "block") || "none",
            }}
            p={[10, 10, 10, 11, 0, 1]}
            mx={`auto`}
            sx={{
              svg: {
                height: ["auto", "auto", "auto", "18rem", "22rem"],
              },
            }}
          >
            <MultiHandCross className="AboutMultiHandCross" fill="#F2F3F4" />
          </Box>
        </Box>
        <Box
          flex={[`100%`, `100%`, `100%`, `100%`, `40%`]}
          mt={`auto`}
          mb={8}
          position="relative"
          overflow="hidden"
          alignSelf={variant === "Secondary" && "flex-end"}
          sx={{
            svg: {
              width: ["680px", "680px", "680px", "750px", "750px"],
              maxWidth: "100%",
              height: "auto",
              top: "0",
              left: variant === "Secondary" && "20%",
              right: variant === "Primary" && "20%",
              position: "relative",
              transform: variant === "Primary" && "scaleX(-1)",
            },
          }}
        >
          <PhotoWrapper
            image={photo.gatsbyImageData.images.fallback.src}
            width={photo.gatsbyImageData.width}
            height={photo.gatsbyImageData.height}
            imgAlt={photo.title}
            id={photo.id}
            crossColor={variant === "Primary" ? "#00ADBC" : "#FFA500"}
            fillColor={(variant === "Secondary" && "#FFA500") || "#00ADBC"}
          />
        </Box>
      </Flex>
    );
  }

  return (
    <>
      <Grid
        gridTemplateColumns={[
          `repeat(1, 100%)`,
          `repeat(1, 100%)`,
          `repeat(1, 100%)`,
          `60% 40%`,
          `70% 30%`,
          `50% 50%`,
          `50% 50%`,
        ]}
        gridGap={[2, 4, 4, 8, 8, 4]}
        justifyContent={`space-around`}
        py={[6, 6, 6, 12, 12]}
        px={0}
        mt={"auto"}
        mx={[0, 0, 0, 0, 0, 6, 6]}
        justifyItems={`flex-end`}
      >
        <GridItem
          className="about-content"
          order={[2, 2, 2, 1, 1]}
          px={[`2rem`, `4rem`, `4.5rem`, `4rem`, `5rem`, `5rem`]}
          mt={[`5.5rem`, 0, 0, 0, 0]}
        >
          {/* Text Content */}
          <Heading color="primary">{title}</Heading>
          <Box
            sx={{
              h2: {
                fontFamily: "var(--chakra-fonts-heading)",
                fontWeight: "var(--chakra-fontWeights-bold)",
                fontSize: "var(--chakra-fontSizes-3xl)",
                lineHeight: "1.33",
                color: "var(--chakra-colors-primary)",
              },
              p: { padding: [".5rem 0 !important"] },
            }}
          >
            <RichText content={content} />
          </Box>
        </GridItem>

        <GridItem
          className="about-creative"
          order={[1, 1, 1, 2, 2]}
          px={0}
          marginRight={[0, 0, 0, 0, 0, 20, 20]}
        >
          {/* Cross image with smiling man and OSI quote */}
          <Grid
            gridTemplateRows={[
              `fit-content fit-content`,
              `fit-content fit-content`,
              `fit-content fit-content`,
              `50% 50%`,
              `50% 50%`,
              `50% 50%`,
            ]}
          >
            <GridItem
              className="grid-img-wrapper"
              position="relative"
              overflow="hidden"
              height="fit-content"
              sx={{
                svg: {
                  width: ["600px", "500px", "550px", "750px", "600px", "600px"],
                  maxWidth: "100%",
                  height: "auto",
                  top: "0",
                  left: ["20", "20", "360", "100", "45", "auto"],
                  right: ["auto", "auto", "auto", "auto", "auto", "0"],
                  position: "relative",
                  marginBottom: ["auto", "auto", "1rem", "auto", "auto"],
                  g: { fill: "#FFA500" },
                },
              }}
            >
              <PhotoWrapper
                className="aboutImg"
                image={photo.gatsbyImageData.images.fallback.src}
                // width={photo.gatsbyImageData.width}
                // height={["30rem", "35rem", "30rem", "45rem", "36rem"]}
                id={photo.id}
                imgAlt={photo.title}
                fillColor="#00ADBC"
              />
            </GridItem>

            <GridItem
              className="quoteMultiHandGridWrapper"
              display={
                (path === "/services-details" && "none") ||
                (path === "/benefits" && "none") ||
                "block"
              }
              m={["-4rem 0 -4rem 0", 0, 0, "-1rem 0 3rem 0", "0 0 5rem 0"]}
            >
              <Box
                className="osiQuoteBox"
                sx={{
                  color: "#FFA500",
                  fontSize: "1.65rem",
                  lineHeight: "1.2",
                  position: "relatve",
                  right: ["auto", "auto", "auto", "-8.2rem", "-8.2rem", "auto"],
                  padding: [
                    "2.5rem 2rem",
                    "2rem 4rem",
                    "2.5rem 4.5rem",
                    "1.5rem 0rem",
                    "1rem 1rem",
                    "3rem 0 1rem 0",
                  ],
                  margin: ["2rem 0 0", "2rem 0", ".5rem", "1.5rem", "1rem 0"],
                  width: ["auto", "auto", "auto", "auto", "400px", "600px"],
                  fontFamily: `"Baloo 2"`,
                }}
              >
                {imageSubCaption}
              </Box>
              <Box
                className="multiHandCrossBox"
                display={["none", "none", "none", "block", "block"]}
                p={[10, 10, 10, 11, 0, 1]}
                position="relative"
                right={[
                  "auto",
                  "auto",
                  "auto",
                  "-0.2rem",
                  "-2.2rem",
                  "3.25rem",
                ]}
                mt={[0, 0, 0, 0, "-10px", "-20px"]}
                mx={[0, 0, 0, 0, 5, 0]}
                sx={{
                  svg: {
                    height: ["auto", "auto", "auto", "18rem", "25rem"],
                  },
                }}
              >
                <MultiHandCross
                  className="AboutMultiHandCross"
                  fill="#F2F3F4"
                />
              </Box>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </>
  );
};

export default MediaText;

MediaText.propTypes = {
  title: PropTypes.string,
  content: PropTypes.object || PropTypes.string,
  variant: PropTypes.string,
  image: PropTypes.object,
};
