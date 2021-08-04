import { graphql } from "gatsby";
import * as React from "react";
import Layout from "Components/Layout";
import Seo from "Components/Seo";
import BlockReturner from "Features/BlockReturner";

const PageTemplate = ({ data: page }) => {
  const {
    // title,
    seoTitle,
    seoDescription: { seoDescription },
    pageBlocks,
  } = page.contentfulPage;
  return (
    <Layout>
      <Seo title={seoTitle} description={seoDescription} />
      {pageBlocks &&
        pageBlocks.map((block, index) => (
          <BlockReturner
            block={block}
            key={block !== {} ? block.id : `empty-block-${index}`}
          />
        ))}
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
        ... on ContentfulBlockBanner {
          id
          title
          internal {
            type
          }
          contentString
          ctaButton {
            slug
            title
            seoTitle
          }
          settingVariant
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
        ... on ContentfulBlockFaq {
          id
          title
          photo {
            ...imageQuery
          }
          questions {
            id
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
        ... on ContentfulBlockMediaText {
          id
          settingVariant
          title
          imageSubCaption
          photo {
            file {
              url
            }
          }
          content {
            raw
          }
        }
      }
    }
  }
`;
