import { Box, Container, Text, Button } from "@chakra-ui/react";
import React from "react";

const Banner = ({ title, content, cta, variant, key }) => {
  const bgColor = () => {
    if (variant === "Primary") {
      return "primary";
    }
    if (variant === "Secondary") {
      return "darkBG";
    }
    return "primary";
  };

  const textColor = () => {
    if (variant === "Primary") {
      return "white";
    }
    if (variant === "Secondary") {
      return "secondary";
    }
    return "black";
  };
  return (
    <Box bg={"lightBG"}>
      <Box key={key} bg={bgColor()} borderTopRightRadius={"100px"}>
        <Container>
          <Box textAlign="center" py={8}>
            {title && variant === "Primary" && (
              <Text fontSize={"4xl"} fontWeight="bold" color={textColor()}>
                {title}
              </Text>
            )}
            {content && (
              <Text color={textColor()} fontSize="xl" fontWeight="bold">
                {content}
              </Text>
            )}
          </Box>
          {cta && (
            <Box display="grid" placeItems="center" pb={8}>
              {console.log(cta)}
              <Button variant="secondary" as="a" href={`/${cta?.slug}`} >{cta?.title}</Button>
            </Box>
          )}
        </Container>
      </Box>
    </Box>
  );
};

export default Banner;
