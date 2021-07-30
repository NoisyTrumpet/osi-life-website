import * as React from "react";
import { Container, Box, Grid, Text, Heading } from "@chakra-ui/react";
import { renderRichText } from "gatsby-source-contentful/rich-text";
// import PhotoWrapper from "SVG/PhotoWrapper";
import { BLOCKS } from "@contentful/rich-text-types";
import "./FeaturedBenefits.scss";

const FeaturedBenefits = ({ title, benefits }) => {
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
    <Container maxW="100%" px={0} my={5}>
      <Heading as="h2" ml={10} mb={5} color="primary">
        {title}
      </Heading>
      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(3, 1fr)",
        ]}
      >
        {benefits.map((benefit) => (
          <Box
            m={0}
            px={8}
            py={10}
            bg="secondary"
            color="white"
            className="featuredBenefitBox"
            key={benefit.title}
          >
            <Heading fontSize="xl" my={2}>
              {benefit.title}
            </Heading>
            <Box>{renderRichText(benefit.description, options)}</Box>
          </Box>
        ))}
      </Grid>
    </Container>
  );
};

export default FeaturedBenefits;
