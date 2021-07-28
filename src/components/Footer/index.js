import {
  Box,
  Grid,
  GridItem,
  Text,
  IconButton,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { graphql, useStaticQuery, Link } from "gatsby";
import React from "react";

const Footer = () => {
  const { contentfulSiteSettings } = useStaticQuery(footerQuery);
  console.log(contentfulSiteSettings);

  const {
    siteFooterContent: copyRight,
    siteSocialAccounts: socials,
  } = contentfulSiteSettings;
  console.log(copyRight.raw);
  console.log(socials);

  const Bold = ({ children }) => (
    <Text fontWeight="800" color="red">
      {children}
    </Text>
  );
  const TextWrapper = ({ children }) => (
    <Text color={`red`} className="styleing">
      {children}
    </Text>
  );

  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
    },
    renderNode: {
      [BLOCKS.text]: (node, children) => <TextWrapper>{children}</TextWrapper>,
      [BLOCKS.list_item]: (node, children) => (
        <TextWrapper>{children}</TextWrapper>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        return (
          <>
            <h2>Embedded Asset</h2>
            <pre>
              <code>{JSON.stringify(node, null, 2)}</code>
            </pre>
          </>
        );
      },
    },
  };

  return (
    <Grid
      gridTemplateColumns={`90% 10%`}
      ml={10}
      bg={mode(`primary`)}
      py={5}
      px={10}
      borderTopLeftRadius={40}
    >
      <GridItem color={`white`}>{renderRichText(copyRight, options)}</GridItem>
      <GridItem>
        {socials.map((social) => {
          if (social.title === "Facebook") {
            return (
              <IconButton
                mx={1}
                bg={`secondary`}
                borderTopRightRadius={`50%`}
                as="a"
                target="_blank"
                rel="noopener noreferrer"
                href={social.url}
                aria-label={social.title}
                icon={<FaFacebookF fontSize="20px" />}
              />
            );
          } else if (social.title === "LinkedIn") {
            return (
              <IconButton
                mx={1}
                bg={`secondary`}
                borderTopRightRadius={`50%`}
                as="a"
                target="_blank"
                rel="noopener noreferrer"
                href={social.url}
                aria-label={social.title}
                icon={<FaLinkedinIn fontSize="20px" />}
              />
            );
          }
        })}
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
