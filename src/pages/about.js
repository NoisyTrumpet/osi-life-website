import { graphql } from "gatsby";
import * as React from "react";
import Layout from "Components/Layout";
import Seo from "Components/Seo";
import BlockReturner from "Features/BlockReturner";

const AboutPage = ({ data }) => {
  const {
    title,
    seoTitle,
    seoDescription: { seoDescription },
    pageBlocks,
  } = data.contentfulPage;
  // @TODO: Add Hero Component
  // @TODO: Add SVG Wrapper Component

  return (
    <Layout>
      <Seo title={seoTitle} description={seoDescription} />
      {pageBlocks.map((block) => (
        <BlockReturner block={block} />
      ))}
    </Layout>
  );
};

export default AboutPage;

export const query = graphql`
  query aboutQuery {
    contentfulPage(title: { eq: "About" }) {
      id
      seoDescription {
        seoDescription
      }
      seoKeywords
      seoMetaRobotsNofollow
      seoMetaRobotsNoindex
      seoTitle
      title
      pageBlocks {
        ... on ContentfulBlockMediaText {
          id
          settingVariant
          title
          imageSubCaption
          photo {
            ...imageQuery
          }
          content {
            raw
          }
        }
      }
    }
  }
`;
