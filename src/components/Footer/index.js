import {
  Box,
  Grid,
  GridItem,
  IconButton,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import RichText from "components/RichText";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import ContactForm from "Components/ContactForm";

const Footer = ({ path }) => {
  const { contentfulSiteSettings } = useStaticQuery(footerQuery);

  const {
    siteFooterContent: copyRight,
    siteSocialAccounts: socials,
  } = contentfulSiteSettings;

  if (
    path === "/faq" ||
    path === "/" ||
    path === "/services" ||
    path === "/about" ||
    path === "/benefits"
  ) {
    return (
      <Box bg="lightGrayBG">
        <Box
          ml={{ base: 0, sm: 10 }}
          bg={mode(`primary`)}
          py={5}
          px={10}
          borderTopLeftRadius={40}
          borderTopRightRadius={{ base: 40, sm: 0 }}
          mt={"auto"}
        >
          <ContactForm
            title="Learn More"
            subtitle="Share your information below to stay up to date with the latest at OsiLIFE."
          />
          <Grid
            gridTemplateColumns={[`100%`, `100%`, `100%`, `85% 15%`, `90% 10%`]}
            gridTemplateRows={[
              `repeat(2,.3fr)`,
              `repeat(2,.3fr)`,
              `repeat(2,.3fr)`,
              `repeat(1,1fr)`,
              `repeat(1,1fr)`,
            ]}
            maxWidth={`1500px`}
            mx={`auto`}
          >
            <GridItem color={`white`}>
              <RichText content={copyRight} />
            </GridItem>
            <GridItem
              alignSelf={[`center`, `center`, `center`, `start`, `start`]}
              justifySelf={`center`}
            >
              {socials.map((social) => (
                <IconButton
                  mx={1}
                  bg={`secondary`}
                  borderTopRightRadius={`50%`}
                  as="a"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={social.url}
                  aria-label={social.title}
                  key={social.title}
                  icon={
                    social.title === `Facebook` ? (
                      <FaFacebookF fontSize="20px" color="white" />
                    ) : (
                      <FaLinkedinIn fontSize="20px" color="white" />
                    )
                  }
                />
              ))}
            </GridItem>
          </Grid>
        </Box>
      </Box>
    );
  }
  if (path === "/services-details") {
    return (
      <Box
        ml={{ base: 0, sm: 10 }}
        bg={mode(`primary`)}
        py={5}
        px={10}
        borderTopLeftRadius={40}
        borderTopRightRadius={{ base: 40, sm: 0 }}
        mt={"auto"}
      >
        <ContactForm
          title="Learn More"
          subtitle="Share your information below to stay up to date with the latest at OsiLIFE."
        />
        <Grid
          maxW={`1500px`}
          mx={`auto`}
          gridTemplateColumns={{ base: `100%`, xl: `85% 15%` }}
          gridTemplateRows={[
            `repeat(2,.5fr)`,
            `repeat(2,.5fr)`,
            `repeat(2,.5fr)`,
            `repeat(1,1fr)`,
            `repeat(1,1fr)`,
          ]}
        >
          <GridItem color={`white`}>
            <RichText content={copyRight} />
          </GridItem>
          <GridItem
            alignSelf={{ base: `center`, xl: `start` }}
            justifySelf={`center`}
          >
            {socials.map((social) => (
              <IconButton
                mx={1}
                bg={`secondary`}
                borderTopRightRadius={`50%`}
                as="a"
                target="_blank"
                rel="noopener noreferrer"
                href={social.url}
                aria-label={social.title}
                key={social.title}
                icon={
                  social.title === `Facebook` ? (
                    <FaFacebookF fontSize="20px" color="white" />
                  ) : (
                    <FaLinkedinIn fontSize="20px" color="white" />
                  )
                }
              />
            ))}
          </GridItem>
        </Grid>
      </Box>
    );
  }
  return (
    <Box bg={mode(`primary`)} py={5} px={10} mt={"auto"}>
      <ContactForm
        title="Learn More"
        subtitle="Share your information below to stay up to date with the latest at OsiLIFE."
      />
      <Grid
        gridTemplateColumns={[`100%`, `100%`, `100%`, `85% 15%`, `90% 10%`]}
        gridTemplateRows={[
          `repeat(2,.3fr)`,
          `repeat(2,.3fr)`,
          `repeat(2,.3fr)`,
          `repeat(1,1fr)`,
          `repeat(1,1fr)`,
        ]}
      >
        <GridItem color={`white`}>
          <RichText content={copyRight} />
        </GridItem>
        <GridItem
          alignSelf={[`center`, `center`, `center`, `start`, `start`]}
          justifySelf={`center`}
        >
          {socials.map((social) => (
            <IconButton
              mx={1}
              bg={`secondary`}
              borderTopRightRadius={`50%`}
              as="a"
              target="_blank"
              rel="noopener noreferrer"
              href={social.url}
              aria-label={social.title}
              key={social.title}
              icon={
                social.title === `Facebook` ? (
                  <FaFacebookF fontSize="20px" color="white" />
                ) : (
                  <FaLinkedinIn fontSize="20px" color="white" />
                )
              }
            />
          ))}
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Footer;

const footerQuery = graphql`
  query {
    contentfulSiteSettings {
      siteFooterContent {
        raw
      }
      siteSocialAccounts {
        url
        title
      }
    }
  }
`;
