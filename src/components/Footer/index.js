import {
  Grid,
  GridItem,
  Text,
  IconButton,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";

const Footer = () => {
  const { contentfulSiteSettings } = useStaticQuery(footerQuery);

  const {
    siteFooterContent: copyRight,
    siteSocialAccounts: socials,
  } = contentfulSiteSettings;

  const Linker = ({ children, data }) => {
    const link = data.data.uri;
    return (
      <Link to={link} aria-label={children} fontWeight="bold">
        {children}
      </Link>
    );
  };
  const TextWrapper = ({ children }) => (
    <Text color={`red`} className="styleing">
      {children}
    </Text>
  );

  const options = {
    // renderMark: {
    //   [MARKS.BOLD]: (text) => <Linker>{text}</Linker>,
    // },
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => (
        <Linker data={node}>{children}</Linker>
      ),
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
      <GridItem color={`white`}>{renderRichText(copyRight, options)}</GridItem>
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
