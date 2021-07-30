import { graphql } from "gatsby";
import * as React from "react";
import Layout from "Components/Layout";
import Seo from "Components/Seo";
import Hero from "Components/Hero";
import FeaturedServices from "Components/FeatServices";

const IndexPage = ({ data }) => {
  const {
    // title,
    seoTitle,
    seoDescription: { seoDescription },
    pageBlocks,
  } = data.contentfulPage;
  // @TODO: Add Hero Component
  // @TODO: Add SVG Wrapper Component

  const BlockReturner = ({ block }) => {
    if (block !== {} && block?.internal?.type === "ContentfulBlockPageHeader") {
      return (
        <Hero
              title={block.title}
              variant={block.variant}
              image={block.image}
              key={block.id}
            />
      );
    } else if (
      block !== {} &&
      block?.internal?.type === "ContentfulBlockFeaturedServices"
    ) {
      return <FeaturedServices services={block.services} id={block.id} />;
    }
    return <div></div>;
  };

  return (
    <Layout>
      <Seo title={seoTitle} description={seoDescription} />
      {/* <h1>{title}</h1> */}
      {pageBlocks && pageBlocks.map((block) => <BlockReturner block={block} />)}
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
      }
    }
  }
`;
