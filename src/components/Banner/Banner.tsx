import { Box, Container, Text, Button } from "@chakra-ui/react";
import React from "react";

type BannerBlock = Queries.ContentfulBlockBanner & {
  className?: string;
  path?: string;
};

const Banner = ({
  title,
  contentString: content,
  ctaButton: cta,
  settingVariant: variant,
  path,
  backgroundColor,
  textColor: cmsTextColor,
}: BannerBlock) => {
  const bgColor = () => {
    if (backgroundColor && backgroundColor[0] === "lightGrayBG") {
      return "lightBG";
    }

    if (backgroundColor && backgroundColor[0] !== "gray") {
      return backgroundColor[0];
    }

    return "primary";
  };

  const textColor = () => {
    if (cmsTextColor && cmsTextColor[0] !== "primary") {
      return cmsTextColor[0];
    }
    return "primary";
  };

  return (
    <Box bg={bgColor()} fontFamily={`var(--chakra-fonts-heading)`}>
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
  );
};

export default Banner;
