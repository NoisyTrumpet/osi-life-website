import {
  Grid,
  GridItem,
  useColorModeValue as mode,
  Heading,
} from "@chakra-ui/react";
import PhotoWrapper from "SVG/PhotoWrapper";
import React from "react";
import { Link } from "gatsby";

const FeaturedServices = ({ services, id }) => {
  const title = services[0]?.title;

  return (
    <Grid
      gridTemplateColumns={[
        `repeat(1,85%)`,
        `repeat(1,70%)`,
        `repeat(3,30%)`,
        `repeat(3,30%)`,
        `repeat(3,30%)`,
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
      bg={mode(`lightGrayBG`)}
      py={5}
      px={10}
      borderTopLeftRadius={80}
      borderTopRightRadius={80}
      mt={"auto"}
      key={id}
    >
      {services.map((service) => {
        return (
          <GridItem
            sx={{
              svg: {
                width: "100%",
                maxWidth: "100%",
              },
            }}
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
            <Link as={`a`} href={service.page.slug}>
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
        );
      })}
    </Grid>
  );
};

export default FeaturedServices;
