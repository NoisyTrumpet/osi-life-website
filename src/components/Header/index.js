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
import SubMenu from "./Fragments/SubMenu";

const Header = () => {
  const { pathname } = useLocation();
  const { contentfulSiteSettings } = useStaticQuery(menuQuery);

  const {
    siteLogo: logo,
    siteHeaderCta: cta,
    navigation,
    siteTitle: title,
    subMenu,
  } = contentfulSiteSettings;

  return (
    <Box bg={mode("gray.50", "gray.700")} zIndex={999}>
      <Navbar>
        <Navbar.Brand>
          <Center marginEnd="10">
            <Link to="/" aria-label={title}>
              <Image
                src={`https:${logo.file.url.split(["//"][1])}`}
                alt={title}
                htmlWidth="198.27"
                htmlHeight="62.67"
              />
            </Link>
          </Center>
        </Navbar.Brand>
        <Navbar.Links>
          {navigation.map(
            (link, index) =>
              link.title === "Services" ? (
                <SubMenu
                  title={link.title}
                  links={subMenu}
                  link={`/${link.slug}`}
                  key={`sub-menu-${index}-${link.id}`}
                />
              ) : (
                <NavLink
                  key={`sub-menu-${index}-${link.id}`}
                  to={`/${link.slug}`}
                  isActive={pathname.includes(link.slug)}
                >
                  {link.title}
                </NavLink>
              )
            // <NavLink
            //     key={index}
            //     to={`/${link.slug}`}
            //     isActive={pathname.includes(link.slug)}
            //   >
            //     {link.title}
            //   </NavLink>
          )}
        </Navbar.Links>
        <Navbar.Button>
          <Button
            as="a"
            href="#contact"
            variant="secondary"
            aria-label={cta.seoTitle}
          >
            {cta.title}
          </Button>
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
      subMenu {
        title
        url
      }
    }
  }
`;
