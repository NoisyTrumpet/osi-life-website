import { Grid, GridItem, Heading } from "@chakra-ui/react";
import PhotoWrapper from "SVG/PhotoWrapper";
import React from "react";
import { Link } from "gatsby";

const FeaturedServices = ({ services, id }) => {
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
      bg={`lightGrayBG`}
      py={5}
      px={10}
      borderTopLeftRadius={80}
      borderTopRightRadius={80}
      mt={"auto"}
      key={id}
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
              (service.title === "Chronic Care Management" && "#00ADBC") ||
              "#FFA500"
            }
          />
          <Link
            to={`/${service.page.slug}`}
            alt={service.title}
            aria-label={service.title}
          >
            {/* service-details */}
            <Heading
              as={`h3`}
              textAlign={`center`}
              color={`primary`}
              _hover={{
                color: `secondary`,
              }}
            >
              {service.title}
            </Heading>
          </Link>
        </GridItem>
      ))}
    </Grid>
  );
};

export default FeaturedServices;
