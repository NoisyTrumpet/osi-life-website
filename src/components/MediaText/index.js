import React from "react";
import PropTypes from "prop-types";

import { Box, Grid, GridItem, Heading, Container } from "@chakra-ui/react";
import PhotoWrapper from "SVG/PhotoWrapper";
import RichText from "Components/RichText";
import MultiHandCross from "SVG/MultiHandCross";
import "./MediaText.scss";

const MediaText = ({ title, content, photo, imageSubCaption, id }) => {
  // const [tabletDown] = useMediaQuery("(min-width: 63em)");
  // const [isMed] = useMediaQuery("(min-width: 48em)");

  return (
    <Container m="1rem auto">
      <Grid
        gridTemplateColumns={[
          `repeat(1, 100%)`,
          `repeat(1, 100%)`,
          `repeat(1, 100%)`,
          `60% 40%`,
          `60% 40%`,
        ]}
        gridGap={[2, 4, 4, 8, 8]}
        justifyContent={`space-around`}
        py={[6, 6, 6, 12, 12]}
        px={[6, 6, 6, 12, 12]}
        mt={"auto"}
      >
        <GridItem className="about-content">
          {/* Text Content */}
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
              p: { padding: ".5rem 0 !important" },
            }}
          >
            <RichText content={content} />
          </Box>
        </GridItem>
        <GridItem className="about-creative">
          {/* Cross image with smiling man and OSI quote */}
          <Grid
            gridTemplateRows={[
              `50% 50%`,
              `50% 50%`,
              `50% 50%`,
              `50% 50%`,
              `60% 40%`,
            ]}
          >
            <GridItem className="grid-img-wrapper">
              <PhotoWrapper
                className="aboutImg"
                image={photo.gatsbyImageData.images.fallback.src}
                width={photo.gatsbyImageData.width}
                height={photo.gatsbyImageData.height}
                id={photo.id}
                imgAlt={photo.title}
                fillColor="#00ADBC"
                position="relative"
                top="0"
                right={["-75", "-75", "-100", "-100", "-100"]}
              />
            </GridItem>
            <GridItem>
              <Box
                sx={{
                  color: "#FFA500",
                  fontSize: "1.65rem",
                  lineHeight: "1.2",
                  padding: [
                    "1.5rem 1rem",
                    "2.5rem 2rem",
                    "2.5rem 2rem",
                    "2.5rem 2rem",
                    "2.5rem 2rem",
                  ],
                  margin: "1rem",
                }}
              >
                {imageSubCaption}
              </Box>
              <Box className="multiHandCrossBox" p={10} position="relative">
                <MultiHandCross
                  className="AboutMultiHandCross"
                  fillColor="#F2F3F4"
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
