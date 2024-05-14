import { Box, Container, Text, Button } from "@chakra-ui/react";
import React from "react";

const Banner = ({ title, content, cta, variant, path }) => {
  const bgColor = () => {
    if (
      (variant === "Primary" && path === "/services") ||
      (variant === "Primary" && path === "/benefits")
    ) {
      return "secondary";
    }
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
      <Box
        bg={bgColor()}
        borderTopRightRadius={"100px"}
        fontFamily={`var(--chakra-fonts-heading)`}
      >
        <Container maxWidth={`1500px`} mx={`auto`}>
          <Box
            textAlign="center"
            py={8}
            maxW={(path === "/benefits" && 950) || 800}
            mx={`auto`}
          >
            {title && variant === "Primary" && path !== "/benefits" && (
              <Text fontSize={"5xl"} fontWeight="bold" color={textColor()}>
                {title}
              </Text>
            )}
            {content && (
              <Text
                color={textColor()}
                fontSize={(path === "/services" && "2xl") || "2.2em"}
                fontWeight="bold"
              >
                {content}
              </Text>
            )}
          </Box>
          {cta && (
            <Box display="grid" placeItems="center" pb={8}>
              <Button
                variant={(path === "/benefits" && "darkGrey") || "secondary"}
                as="a"
                href={`#contact`}
              >
                {cta?.title}
              </Button>
            </Box>
          )}
        </Container>
      </Box>
    </Box>
  );
};

export default Banner;
