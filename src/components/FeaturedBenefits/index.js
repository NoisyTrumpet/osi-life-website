import * as React from "react";
import { Div, Box, Grid, Text, Heading } from "@chakra-ui/react";
import { renderRichText } from "gatsby-source-contentful/rich-text";

const FeaturedBenefits = ({ title, items }) => {

  return (
    <Div w="100%">
        <Heading as="h2" margin="none" color="#00ADBC">{title}</Heading>

        {items.map((item) => {
        return(
            <Grid templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(3, 1fr)"]}>
                <Box bg="#FFA500">
                    <Text>{renderRichText(item.blockTitle)}</Text>
                    <Text>{renderRichText(item.blockDescription)}</Text>
                </Box>
            </Grid>
            );
        })}

    </Div>
  );
};

export default FeaturedBenefits;
