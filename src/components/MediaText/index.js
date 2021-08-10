import React from "react";
import PropTypes from "prop-types";

import {
  Box,
  Grid,
  GridItem,
  Heading,
  Container,
  grid,
} from "@chakra-ui/react";
import PhotoWrapper from "SVG/PhotoWrapper";
import RichText from "Components/RichText";
import MultiHandCross from "SVG/MultiHandCross";
// import "./MediaText.scss";

const MediaText = ({ title, content, photo, imageSubCaption, id }) => {
  // const [tabletDown] = useMediaQuery("(min-width: 63em)");
  // const [isMed] = useMediaQuery("(min-width: 48em)");

  return (
    <Container m="0" p="0">
      <Grid
        gridTemplateColumns={[
          `repeat(1, 100%)`,
          `repeat(1, 100%)`,
          `repeat(1, 100%)`,
          `60% 40%`,
          `70% 30%`,
          `75% 25%`,
          `75% 25%`
        ]}
        gridGap={[ 2, 4, 4, 8, 8, 2 ]}
        justifyContent={`space-around`}
        py={[6, 6, 6, 12, 12]}
        px={ 0 }
        mt={"auto"}
        mx={ 0 }
      >
        <GridItem className="about-content" order={[2, 2, 2, 1, 1]} px={[ "2rem", "2rem", "3rem", "4rem", "5rem" ]}>
          {/* Text Content */}
          <Heading color="primary">{title}</Heading>
          <Box
            sx={{
              h2: {
                fontSize: "2.25rem !important",
                fontWeight: "700 !important",
                lineHeight: "1.2 !important",
                color: "#00ADBC",
              },
              p: { padding: ".5rem 0 !important" },
            }}
          >
            <RichText content={content} />
          </Box>
        </GridItem>

        <GridItem
          className="about-creative"
          order={[1, 1, 1, 2, 2]}
          zIndex="100"
          px={[ 0, 0, 0, 5, 5 ]}
        >
          {/* Cross image with smiling man and OSI quote */}
          <Grid
            gridTemplateRows={[
              `50% 50%`,
              `50% 50%`,
              `50% 50%`,
              `50% 50%`,
              `60% 40%`,
            ]}
            position="relative"
            zIndex="5"
          >
            <GridItem
              className="grid-img-wrapper"
              overflow={[ "hidden", "hidden", "hidden", "visible", "visible" ]}
            >
              <Box
                sx={{
                  display: "grid",
                  // overflow: [ "hidden", "hidden", "hidden", "visible", "visible" ],
                  position: "relative",
                  top: "0",
                  right: [
                    "-4.688rem",
                    "-8.2rem",
                    "-11.875rem",
                    "-1rem",
                    "6rem",
                    "-3.5rem"
                  ],
                  zIndex: "200",
                  svg: {
                    height: ["30rem", "35rem", "30rem", "38rem", "39rem", "40rem" ],
                  }
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
              </Box>
            </GridItem>

            <GridItem>
              <Box
                sx={{
                  color: "#FFA500",
                  fontSize: "1.65rem",
                  lineHeight: "1.2",
                  position: "relative",
                  right: [ "auto", "auto", "auto", "-8.2rem", "-8.2rem", "-5.2rem" ],
                  padding: [
                    "1.5rem 2rem",
                    "1.5rem 2rem",
                    "1.5rem 3rem",
                    "1.5rem 1rem",
                    "1rem 1rem",
                    "1rem 0rem"
                  ],
                  margin: ["1rem 0", "1rem 0", "1rem 0", ".5rem", "1.5rem .5rem"],
                }}
              >
                {imageSubCaption}
              </Box>
              <Box
                className="multiHandCrossBox"
                display={["none", "none", "none", "block", "block"]}
                p={[ 10, 10, 10, 11, 12 ]}
                position="relative"
                right={[ "auto", "auto", "auto", "-8.2rem", "-8.2rem", "-8.2rem" ]}
                mt={[ 0, 0, 0, 0, "-10px", "-90px"]}
                mx={[ 0, 0, 0, 0, 5, 0 ]}
                sx={{
                  svg: {
                    height: [ "auto", "auto", "auto", "18rem", "19rem" ]
                  }
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
    </Container>
  );
};

export default MediaText;

MediaText.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  variant: PropTypes.string,
  image: PropTypes.object,
};
