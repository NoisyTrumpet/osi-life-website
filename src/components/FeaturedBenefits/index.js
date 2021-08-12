import * as React from "react";
import { Container, Box, Grid, Heading, Img } from "@chakra-ui/react";
import RichText from "components/RichText";
import "./FeaturedBenefits.scss";

const FeaturedBenefits = ({ title, benefits }) => {
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
            px={[8, 8, 12, 8, 8]}
            py={10}
            bg="secondary"
            color="white"
            className="featuredBenefitBox"
            key={benefit.id}
          >
            <Img
              src={benefit.icon.file.url}
              sx={{ margin: "1rem auto" }}
              alt={benefit.title}
              w="auto"
              h="auto"
            />
            <Heading fontSize="xl" my={2}>
              {benefit.title}
            </Heading>
            <Box>
              <RichText content={benefit.description} />
            </Box>
          </Box>
        ))}
      </Grid>
    </Container>
  );
};

export default FeaturedBenefits;
