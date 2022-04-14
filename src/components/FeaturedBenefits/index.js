import * as React from "react";
import { Container, Box, Grid, Heading, Img } from "@chakra-ui/react";
import RichText from "components/RichText";
import "./FeaturedBenefits.scss";

const FeaturedBenefits = ({ title, benefits }) => {
  return (
    <Container maxW="100%" px={0} my={5}>
      <Heading as="h2" ml={10} my={8} color="primary">
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
              src={`https:${benefit.icon.file.url.split(["//"][1])}`}
              sx={{ margin: "1rem auto" }}
              alt={benefit.title}
              h={"115"}
              htmlWidth="136"
              htmlHeight="115"
              maxW="100%"
            />
            <Heading fontSize="2xl" my={2}>
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
