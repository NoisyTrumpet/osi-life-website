import React from "react";

import { Box, Grid, GridItem, Heading, Flex } from "@chakra-ui/react";
import PhotoWrapper from "svg/PhotoWrapper";
import RichText from "components/RichText";
import MultiHandCross from "svg/MultiHandCross";
import clsx from "clsx";
import { GatsbyImage } from "gatsby-plugin-image";

type MediaTextProps = Queries.ContentfulBlockMediaText & {
  className?: string;
  path?: string;
};

const MediaText = ({
  title,
  content,
  photo,
  imageSubCaption,
  id,
  path,
  settingVariant: variant,
  startsOn,
  ...props
}: MediaTextProps) => {
  const isSimple = variant === "Simple";
  console.log("isSimple", variant);

  const isLeft = startsOn === true || startsOn === null;
  const isRight = startsOn === false;

  if (isSimple) {
    return (
      <div className={``}>
        <div className={`container mx-auto max-w-7xl`}>
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-4`}>
            {/* Body */}
            <div className={clsx(`flex flex-col justify-center items-start px-2 md:px-8`, {
                "order-1": isRight,
                "order-2": isLeft,
            })}>
              <Heading as="h2" className={`text-4xl font-bold `}>{title}</Heading>
              <div className={``}>
                <RichText content={content} />
              </div>
            </div>
            {/* Media */}
            <div className={clsx(`flex justify-center items-center`, {
                "order-2": isRight,
                "order-1": isLeft,
            })}>
              <GatsbyImage image={photo.gatsbyImageData} alt={photo.title} />
              </div>
          </div>
        </div>
      </div>
    );
  }

  if (path === "/services-details") {
    return (
      <Box
        bg={variant === "Secondary" && `lightGrayBG`}
        borderTopRightRadius={variant === "Secondary" && 140}
        id={title.split(" ")[0].toLowerCase()}
        key={id}
        overflowX={{ base: `hidden` }}
      >
        <Flex
          flexDirection={{
            base: `column-reverse`,
            lg: (variant === "Secondary" && `row-reverse`) || `row`,
          }}
          pb={`4rem`}
          maxW={1500}
          mx={`auto`}
        >
          <Box
            flex={{ base: `100%`, lg: `60%` }}
            px={{ base: 2, md: 8 }}
            pt={{ base: 6, lg: 12 }}
            mx={4}
            my={`auto`}
          >
            <Box maxW={800} mx={`auto`}>
              <Heading color="#00ADBC!important">{title}</Heading>
              <Box
                sx={{
                  h2: {
                    // fontSize: "2.25rem !important",
                    // fontWeight: "700 !important",
                    // lineHeight: "1.2 !important",
                    padding: "1rem 0 !important",
                    color: `#00ADBC!important`,
                  },
                  h4: {
                    // fontSize: `var(--chakra-fontSizes-lg)`,
                    color: `#00ADBC!important`,
                  },
                  // p: { padding: [".5rem 0 !important"] },
                }}
              >
                <RichText content={content} />
              </Box>
            </Box>
          </Box>
          <Box
            flex={{ base: `100%`, lg: `40%` }}
            mb={8}
            alignSelf={variant === "Primary" && "flex-end"}
            sx={{
              svg: {
                width: { base: "680px", xl: "750px" },
                maxWidth: "100%",
                height: "auto",
                top: "0",
                left: variant === "Primary" && "25%",
                right: variant === "Secondary" && "25%",
                transform: variant === "Secondary" && "scaleX(-1)",
                position: "relative",
              },
            }}
          >
            <PhotoWrapper
              image={photo}
              safariSource={photo.file.url}
              width={photo.gatsbyImageData.width}
              height={photo.gatsbyImageData.height}
              imgAlt={photo.title}
              id={photo.id}
              fillColor={(variant === "Secondary" && "#00ADBC") || "#FFA500"}
              crossColor={variant === "Secondary" ? "#00ADBC" : "#FFA500"}
              imageFlip={variant === "Primary" && "-1"} // either 1 or -1
              crossesFlip={variant === "Secondary" && "-1"} // either 1 or -1
            />
          </Box>
        </Flex>
      </Box>
    );
  }
  if (path === "/benefits") {
    return (
      <Box
        bg={variant === "Secondary" && `lightGrayBG`}
        borderTopLeftRadius={variant === "Secondary" && 140}
        key={id}
        overflowX={{ base: `hidden` }}
      >
        <Flex
          flexDirection={{
            base: `column-reverse`,
            lg: (variant === "Primary" && `row-reverse`) || `row`,
            xl: (variant === "Primary" && `row-reverse`) || `row`,
            "2xl": variant === "Primary" && `row-reverse`,
          }}
          pb={`4rem`}
          maxW={1500}
          mx={`auto`}
        >
          <Box
            flex={{ base: `100%`, lg: `60%` }}
            px={{ base: 2, md: 8 }}
            pt={{ base: 6, lg: 12 }}
            mx={4}
            my={`auto`}
          >
            <Box maxW={800} mx={`auto`}>
              <Heading color="primary">{title}</Heading>
              <Box
              // sx={{
              //   h2: {
              //     fontSize: "2.25rem !important",
              //     fontWeight: "700 !important",
              //     lineHeight: "1.2 !important",
              //     // color: "#00ADBC",
              //     padding: "1rem 0 !important",
              //   },
              //   h5: {
              //     fontSize: `var(--chakra-fontSizes-lg)`,
              //   },
              //   p: { padding: [".5rem 0 !important"] },
              // }}
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
            flex={{ base: `100%`, lg: `40%` }}
            mt={`auto`}
            mb={8}
            position="relative"
            alignSelf={variant === "Secondary" && "flex-end"}
            sx={{
              svg: {
                width: { base: "680px", xl: "750px" },
                maxWidth: "100%",
                height: "auto",
                top: "0",
                left: variant === "Secondary" && "25%",
                right: variant === "Primary" && "25%",
                position: "relative",
                transform: variant === "Primary" && "scaleX(-1)",
              },
            }}
          >
            <PhotoWrapper
              image={photo}
              safariSource={photo.file.url}
              width={photo.gatsbyImageData.width}
              height={photo.gatsbyImageData.height}
              imgAlt={photo.title}
              id={photo.id}
              crossColor={variant === "Primary" ? "#00ADBC" : "#FFA500"}
              fillColor={(variant === "Secondary" && "#FFA500") || "#00ADBC"}
              imageFlip={variant === "Secondary" && "-1"} // either 1 or -1
              crossesFlip={variant === "Primary" && "-1"} // either 1 or -1
            />
          </Box>
        </Flex>
      </Box>
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
        mx={"auto"}
        justifyItems={`flex-end`}
        maxWidth={`1500px`}
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
          <Grid gridTemplateRows={{ base: `repeat(2, auto)` }}>
            <GridItem
              className="grid-img-wrapper"
              overflow="hidden"
              sx={{
                svg: {
                  width: ["600px", "500px", "550px", "750px", "600px", "600px"],
                  maxWidth: "100%",
                  height: "auto",
                  top: "0",
                  position: "relative",
                  marginLeft: ["20%", "45%", "47%", "22%", "auto", "auto"],
                  marginBottom: ["auto", "auto", "1rem", "auto", "auto"],
                },
              }}
            >
              <PhotoWrapper
                className="aboutImg"
                image={photo}
                safariSource={photo.file.url}
                width={photo.gatsbyImageData.width}
                height={["30rem", "35rem", "30rem", "45rem", "36rem"]}
                id={photo.id}
                imgAlt={photo.title}
                fillColor="#00ADBC"
                crossColor="#FFA500"
                imageFlip="-1" // either 1 or -1
                crossesFlip="1" // either 1 or -1
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
