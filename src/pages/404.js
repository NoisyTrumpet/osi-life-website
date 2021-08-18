import * as React from "react";
import { Box, Heading, Text, Button, Flex } from "@chakra-ui/react";
import Layout from "Components/Layout";
import Seo from "Components/Seo";
import HandCross from "SVG/HandCross";
import OsiLogoHoriz from "SVG/OsiLogoHoriz";
import { StaticImage } from "gatsby-plugin-image";

const Page404 = () => {
  return (
    <Layout>
      <Seo title={`404`} description={`404 error page`} />
      <Box
        bg={`primary`}
        height={{ base: `80vh`, lg: `90vh` }}
        w={`100vw`}
        overflowX={`hidden`}
      >
        <Flex
          position={`relative`}
          w={`100%`}
          h={`100%`}
          justifyContent={`space-around`}
        >
          <Box zIndex={2}>
            <Box>
              <Box
                m={`auto`}
                align={`center`}
                opacity={`.25`}
                position={`absolute`}
                top={`30%`}
                left={{ base: `50%`, sm: `53%`, lg: `28%` }}
                width={{ base: `80%`, sm: `65%`, lg: `30%` }}
                sx={{
                  svg: {
                    fill: "#fff !important",
                  },
                }}
              >
                <HandCross width={`100%`} height={`auto`} />
              </Box>
              <Box
                m={`auto`}
                align={`center`}
                opacity={`.25`}
                position={`absolute`}
                top={{ base: `-9%`, sm: `-5%`, lg: `-8%` }}
                left={{ base: `-15%`, sm: `-5%`, lg: `2%` }}
                width={{ base: `60%`, sm: `40%`, lg: `22%` }}
                sx={{
                  svg: {
                    fill: "#fff !important",
                  },
                }}
              >
                <HandCross width={`100%`} height={`auto`} />
              </Box>
              <Box
                m={`auto`}
                align={`center`}
                opacity={`.25`}
                position={`absolute`}
                top={{ base: `45%`, sm: `53%`, lg: `45%` }}
                left={{ base: `-54%`, sm: `-13%`, lg: `-5%` }}
                width={{ base: `50%`, sm: `35%`, lg: `15%` }}
                sx={{
                  svg: {
                    fill: "#fff !important",
                  },
                }}
              >
                <HandCross width={`100%`} height={`auto`} />
              </Box>
            </Box>
            <Box
              position={`relative`}
              top={`10%`}
              left={{ base: `1%`, lg: `12%` }}
              w={{ base: 350, sm: 550 }}
            >
              <StaticImage src="../images/404_shirt.png" alt="" />
            </Box>
          </Box>
          <Box
            zIndex={5}
            alignSelf={`center`}
            align={`center`}
            color={`white`}
            fontFamily={`var(--chakra-fonts-heading)`}
            py={10}
            px={2}
            position={{ base: `absolute`, lg: `relative` }}
          >
            <Box width={{ base: `70%`, lg: `45%` }}>
              <OsiLogoHoriz width={`100%`} height={`auto`} />
            </Box>
            <Heading
              fontSize={{ base: "10em", lg: "14em" }}
              lineHeight={0.9}
              mt={10}
              mb={-4}
            >
              404
            </Heading>
            <Text fontSize={{ base: "2.3em", lg: "5em" }}>
              Something's missing.
            </Text>
            <Text fontSize="2xl">
              This page is missing or the link used is incorrect.
            </Text>
            <Button variant="secondary" as="a" href={`/`} fontSize="2xl" mt={8}>
              Go Back
            </Button>
          </Box>
        </Flex>
      </Box>
    </Layout>
  );
};

export default Page404;
