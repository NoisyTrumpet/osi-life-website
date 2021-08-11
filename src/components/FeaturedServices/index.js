import {
  Grid,
  GridItem,
  useColorModeValue as mode,
  Heading,
  Box,
  Container,
} from "@chakra-ui/react";
import PhotoWrapper from "SVG/PhotoWrapper";
import React from "react";
import { Link } from "gatsby";

const FeaturedServices = ({ services, id, path }) => {
  if (path === "/about") {
    return (
      <Box
        bg={mode(`lightGrayBG`)}
        py={5}
        px={10}
        borderTopLeftRadius={0}
        borderTopRightRadius={0}
        mt={"auto"}
        key={id}
      >
        <Container>
          <Grid
            gridTemplateColumns={[
              `repeat(1,85%)`,
              `repeat(1,70%)`,
              `repeat(3,20%)`,
              `repeat(3,20%)`,
              `repeat(3,20%)`,
            ]}
            gridTemplateRows={[
              `repeat(3,auto)`,
              `repeat(3,auto)`,
              `repeat(1,auto)`,
              `repeat(1,auto)`,
              `repeat(1,auto)`,
            ]}
            gridGap={8}
            justifyContent={`space-around`}
          >
            {services.map((service) => (
              <GridItem
                sx={{
                  svg: {
                    width: "100%",
                    maxWidth: "100%",
                  },
                }}
                key={service.id}
              >
                <PhotoWrapper
                  image={service.image?.gatsbyImageData.images.fallback.src}
                  width={service.image?.gatsbyImageData.width}
                  height={service.image?.gatsbyImageData.height}
                  imgAlt={service.image?.title}
                  id={service.image?.id}
                  fillColor={
                    (service.title === "Chronic Care Management" &&
                      "#00ADBC") ||
                    "#FFA500"
                  }
                />
                <Link
                  to={`/${service.page.slug}`}
                  alt={service.title}
                  aria-label={service.title}
                >
                  <Heading
                    as={`h3`}
                    textAlign={`center`}
                    color={mode(`primary`)}
                    _hover={{
                      color: mode(`secondary`),
                    }}
                  >
                    {service.title}
                  </Heading>
                </Link>
              </GridItem>
            ))}
          </Grid>
        </Container>
      </Box>
    );
  }
  return (
    <Box
      bg={mode(`lightGrayBG`)}
      py={5}
      px={10}
      borderTopLeftRadius={80}
      borderTopRightRadius={80}
      mt={"auto"}
      key={id}
    >
      <Container>
        <Grid
          gridTemplateColumns={[
            `repeat(1,85%)`,
            `repeat(1,70%)`,
            `repeat(3,20%)`,
            `repeat(3,20%)`,
            `repeat(3,20%)`,
          ]}
          gridTemplateRows={[
            `repeat(3,auto)`,
            `repeat(3,auto)`,
            `repeat(1,auto)`,
            `repeat(1,auto)`,
            `repeat(1,auto)`,
          ]}
          gridGap={8}
          justifyContent={`space-around`}
        >
          {services.map((service) => (
            <GridItem
              sx={{
                svg: {
                  width: "100%",
                  maxWidth: "100%",
                  height: "auto",
                },
              }}
              key={service.id}
            >
              <PhotoWrapper
                image={service.image?.gatsbyImageData.images.fallback.src}
                width={service.image?.gatsbyImageData.width}
                height={service.image?.gatsbyImageData.height}
                imgAlt={service.image?.title}
                id={service.image?.id}
                fillColor={
                  (service.title === "Chronic Care Management" && "#00ADBC") ||
                  "#FFA500"
                }
              />
              <Link
                to={`/${service.page.slug}`}
                alt={service.title}
                aria-label={service.title}
              >
                <Heading
                  as={`h3`}
                  fontSize={[`1.5em`, `1.8em`, `1.5em`, `1.8em`, `1.8em`]}
                  textAlign={`center`}
                  color={mode(`primary`)}
                  _hover={{
                    color: mode(`secondary`),
                  }}
                >
                  {service.title}
                </Heading>
              </Link>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturedServices;
