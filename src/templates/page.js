import { graphql } from "gatsby";
import * as React from "react";
import Layout from "Components/Layout";
import Seo from "Components/Seo";
import BlockReturner from "Features/BlockReturner";

const PageTemplate = ({ data: page }) => {
  const {
    title,
    seoTitle,
    seoDescription: { seoDescription },
    pageBlocks,
  } = page.contentfulPage;
  return (
    <Layout>
      <Seo title={seoTitle} description={seoDescription} />
      {pageBlocks && pageBlocks.map((block) => <BlockReturner block={block} />)}
    </Layout>
  );
};

export default PageTemplate;

export const query = graphql`
  query PageTemplateQuery($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      title
      seoDescription {
        seoDescription
      }
      seoTitle
      seoKeywords
      pageBlocks {
        ... on ContentfulBlockMediaText {
          id
          title
          photo {
            gatsbyImageData(
              formats: [PNG, WEBP]
              layout: CONSTRAINED
              placeholder: BLURRED
              quality: 70
            )
          }
          settingVariant
          content {
            raw
          }
          internal {
            type
          }
        }
        ... on ContentfulBlockMissionStatement {
          id
          visionTitle
          title
          missionTitle
          visionDescription {
            visionDescription
          }
          missionDescription {
            missionDescription
          }
          internal {
            type
          }
        }
        ... on ContentfulBlockVisualList {
          id
          title
          settingVariant
          internal {
            type
          }
          items {
            title
            subtitle
            description {
              raw
            }
            id
            icon {
              file {
                url
              }
            }
            image {
              file {
                url
              }
            }
          }
        }
        ... on ContentfulBlockFeaturedServices {
          id
          internal {
            type
          }
          services {
            id
            title
            image {
              ...imageQuery
            }
            page {
              slug
            }
          }
        }
        ... on ContentfulBlockFaq {
          id
          title
          photo {
            ...imageQuery
          }
          questions {
            answer {
              raw
            }
            question
          }
          settingVariant
          internal {
            type
          }
        }
      }
    }
  }
`;
