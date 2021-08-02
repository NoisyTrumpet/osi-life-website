import React from "react";
import PropTypes from "prop-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { BLOCKS } from "@contentful/rich-text-types";
import {
  Box,
  Img,
  Text,
  Grid,
  GridItem,
  Heading
} from "@chakra-ui/react";
import PhotoWrapper from "SVG/PhotoWrapper";
import HandCross from "SVG/HandCross";

const MediaText = ({ title, content, photo, imageSubCaption, id }) => {

  const TextWrapper = ({ children }) => (
    <Text color={`#00ADBC`} className="featuredBenefitsSection">
      {children}
    </Text>
  );

  const options = {
    renderNode: {
      [BLOCKS.text]: (node, children) => <TextWrapper>{children}</TextWrapper>,
      [BLOCKS.list_item]: (node, children) => (
        <TextWrapper>{children}</TextWrapper>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        return (
          <>
            <h2>Embedded Asset</h2>
            <pre>
              <code>{JSON.stringify(node, null, 2)}</code>
            </pre>
          </>
        );
      },
    },
  };

  return (
    <>
        <Grid       
          gridTemplateColumns={[
          `repeat(1,1fr)`,
          `repeat(1,1fr)`,
          `repeat(2,1fr)`,
          `1.3fr 0.7fr`,
          `1.3fr 0.7fr`,
        ]}
          gridGap={8}
          justifyContent={`space-around`}
          py={12}
          px={`5rem`}
          mt={"auto"}>
          <GridItem>
              <Heading color="primary">{title}</Heading>
              <Box sx={{ h2: {fontSize: "2.25rem !important;",
                              fontWeight: "700 !important;",
                              lineHeight: "1.2 !important;",
                              color: "#00ADBC;",
                              padding: "1rem 0 !important;" },
                         p: { padding: ".5rem 0 !important;" } }}
              >{renderRichText(content, options)}</Box>
          </GridItem>
          <GridItem>
            <Grid             
            gridTemplateRows={[
              `repeat(3,.5fr)`,
              `repeat(3,.5fr)`,
              `repeat(3,.5fr)`,
              `repeat(3,.5fr)`,
              `repeat(3,.5fr)`,
            ]}>
              <GridItem>
                <PhotoWrapper
                  image={photo.gatsbyImageData.images.fallback.src}
                  width={photo.gatsbyImageData.width}
                  height={photo.gatsbyImageData.height}
                  id={photo.id}
                  imgAlt={photo.title}
                  fillColor="#FFA500"
                />
              </GridItem>
              <GridItem>
                <Box sx={{ color: "#FFA500", fontSize: "2rem", lineHeight: "1.2", padding: "2.5rem 2rem" }} >{imageSubCaption}</Box>
              </GridItem>
              <GridItem mx="auto">
                <Box w={[180, 220, 220, 370, 511]}>
                {/* <HandCross className="about-hand-cross" fill="#EDEDED" /> */}
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
    content: PropTypes.string,
    variant: PropTypes.string,
    image: PropTypes.object,
  };
