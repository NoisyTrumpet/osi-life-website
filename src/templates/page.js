import { graphql } from "gatsby";
import * as React from "react";
import Layout from "Components/Layout";

import Seo from "Components/Seo";

const PageTemplate = ({ data: page }) => {
  const {
    title,
    seoTitle,
    seoDescription: { seoDescription },
    pageBlocks,
  } = page.contentfulPage;

  //   console.log(page.contentfulPage);
  return (
    <Layout>
      <Seo title={seoTitle} description={seoDescription} />
      <h1>{title}</h1>
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
            image {
              file {
                url
              }
            }
          }
        }
      }
    }
  }
`;
