import { graphql } from "gatsby";
import * as React from "react";
import Layout from "Components/Layout";
import Seo from "Components/Seo";
import Hero from "Components/Hero";
import FeaturedBenefits from "Components/FeaturedBenefits";

const IndexPage = ({ data }) => {
  const {
    title,
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
    }
    if (
      block !== {} &&
      block?.internal?.type === "ContentfulBlockFeaturedBenefits"
    ) {
      return (
        <FeaturedBenefits
          title={block.title}
          benefits={block.benefits}
          key={block.id}
        />
      );
    }
    return <div>{console.log(block)}</div>;
  };

  return (
    <Layout>
      <Seo title={seoTitle} description={seoDescription} />
      {/* <h1>{title}</h1> */}
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
            subtitle
            title
            image {
              ...imageQuery
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
