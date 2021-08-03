import React from "react";
import PropTypes from "prop-types";

import { Box, Grid, GridItem, Heading, Container } from "@chakra-ui/react";
import PhotoWrapper from "SVG/PhotoWrapper";
import RichText from "Components/RichText";

const MediaText = ({ title, content, photo, imageSubCaption, id }) => {
  return (
    <Container>
      <Grid
        gridTemplateColumns={[
          `repeat(1, 100%)`,
          `repeat(1, 100%)`,
          `1fr, .5fr`,
          `1.3fr 0.7fr`,
          `1.3fr 0.7fr`,
        ]}
        gridGap={8}
        justifyContent={`space-around`}
        py={12}
        mt={"auto"}
      >
        <GridItem>
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
        <GridItem>
          <Grid
            gridTemplateRows={[
              `repeat(2,.5fr)`,
              `repeat(2,.5fr)`,
              `repeat(2,.5fr)`,
              `repeat(2,.5fr)`,
              `repeat(2,.5fr)`,
            ]}
          >
            <GridItem>
              <PhotoWrapper
                className="aboutImg"
                image={photo.gatsbyImageData.images.fallback.src}
                width={photo.gatsbyImageData.width}
                height={photo.gatsbyImageData.height}
                id={photo.id}
                imgAlt={photo.title}
                fillColor="#FFA500"
              />
            </GridItem>
            <GridItem>
              <Box
                sx={{
                  color: "#FFA500",
                  fontSize: "1.65rem",
                  lineHeight: "1.2",
                  padding: "2.5rem 2rem",
                  margin: "1rem",
                }}
              >
                {imageSubCaption}
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
