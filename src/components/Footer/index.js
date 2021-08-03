import {
  Grid,
  GridItem,
  IconButton,
  useColorModeValue as mode,
  Box,
} from "@chakra-ui/react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import RichText from "components/RichText";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";

const Footer = ({ path }) => {
  const { contentfulSiteSettings } = useStaticQuery(footerQuery);

  const {
    siteFooterContent: copyRight,
    siteSocialAccounts: socials,
  } = contentfulSiteSettings;

  return (
    <Grid
      gridTemplateColumns={[`100%`, `100%`, `100%`, `85% 15%`, `90% 10%`]}
      gridTemplateRows={[
        `repeat(2,.5fr)`,
        `repeat(2,.5fr)`,
        `repeat(2,.5fr)`,
        `repeat(1,1fr)`,
        `repeat(1,1fr)`,
      ]}
      ml={10}
      bg={mode(`primary`)}
      py={5}
      px={10}
      borderTopLeftRadius={40}
      mt={"auto"}
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
