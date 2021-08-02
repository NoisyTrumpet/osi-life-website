import { graphql } from "gatsby";
import * as React from "react";
import Layout from "Components/Layout";
import Seo from "Components/Seo";
import Hero from "Components/Hero";
import FeaturedServices from "Components/FeatServices";
import BlockReturner from "Features/BlockReturner";

const IndexPage = ({ data }) => {
  const {
    // title,
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

export default IndexPage;

export const homeQuery = graphql`
  query homeQuery {
    contentfulPage(title: { eq: "Home" }) {
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
        ... on ContentfulBlockPageHeader {
          id
          settingVariant
          title
          image {
            ...imageQuery
          }
          internal {
            type
          }
        }
        ... on ContentfulBlockFeaturedBenefits {
          id
          title
          benefits {
            id
            title
            subtitle
            description {
              raw
            }
          }
          internal {
            type
          }
        }
        ... on ContentfulBlockText {
          id
          title
          content {
            raw
          }
          internal {
            type
          }
        }
        ... on ContentfulBlockFeaturedTestimonials {
          id
          title
          testimonials {
            image {
              file {
                url
              }
            }
            name
            quote {
              internal {
                content
              }
            }
          }
          internal {
            type
          }
        }
        ... on ContentfulBlockFeaturedServices {
          id
          title
          services {
            id
            subtitle
            title
            image {
              ...imageQuery
            }
            page {
              slug
            }
          }
          internal {
            type
          }
        }
        ... on ContentfulBlockForm {
          id
          description {
            description
          }
          title
          internal {
            type
          }
        }
        ... on ContentfulBlockVisualList {
          id
          title
          settingVariant
          items {
            subtitle
            title
            description {
              raw
            }
            image {
              ...imageQuery
            }
            icon {
              ...imageQuery
            }
            page {
              slug
            }
          }
          internal {
            type
          }
        }
      }
    }
  }
`;
