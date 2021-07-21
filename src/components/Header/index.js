import {
  Box,
  Center,
  Button,
  useColorModeValue as mode,
  Image,
} from "@chakra-ui/react";
import React from "react";
import Navbar from "./Fragments/Navbar";
import { useLocation } from "@reach/router";
import { NavLink } from "./Fragments/NavLink";
import { graphql, Link, useStaticQuery } from "gatsby";

const Header = () => {
  const { pathname } = useLocation();
  const { contentfulSiteSettings } = useStaticQuery(menuQuery);

  const {
    siteLogo: logo,
    siteHeaderCta: cta,
    navigation,
    siteTitle: title,
  } = contentfulSiteSettings;

  return (
    <Box bg={mode("gray.50", "gray.700")}>
      <Navbar>
        <Navbar.Brand>
          <Center marginEnd="10">
            <Link to="/" aria-label={title}>
              <Image src={logo.file.url} alt={title} />
            </Link>
          </Center>
        </Navbar.Brand>
        <Navbar.Links>
          {navigation.map((link, index) => (
            <NavLink
              key={index}
              href={`/${link.slug}`}
              isActive={pathname.includes(link.slug)}
            >
              {link.title}
            </NavLink>
          ))}
        </Navbar.Links>
        <Navbar.Button>
          <Button aria-label={cta.seoTitle}>{cta.title}</Button>
        </Navbar.Button>
      </Navbar>
    </Box>
  );
};

export default Header;

const menuQuery = graphql`
  query MenuQuery {
    contentfulSiteSettings {
      siteTitle
      siteLogo {
        file {
          url
        }
      }
      siteHeaderCta {
        title
        seoTitle
        slug
      }
      navigation {
        slug
        title
        seoTitle
      }
    }
  }
`;
