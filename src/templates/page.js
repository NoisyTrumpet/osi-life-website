import { graphql } from "gatsby";
import * as React from "react";
import Layout from "Components/Layout";
import FAQs from "Components/FAQs";
import FeaturedServices from "Components/FeatServices";
import Seo from "Components/Seo";

const PageTemplate = ({ data: page }) => {
  const {
    title,
    seoTitle,
    seoDescription: { seoDescription },
    pageBlocks,
  } = page.contentfulPage;

  const BlockReturner = ({ block }) => {
    if (block !== {} && block?.internal?.type === "ContentfulBlockFaq") {
      return (
        <FAQs
          id={block.id}
          title={block.title}
          photo={block.photo}
          variant={block.settingVariant}
          items={block.questions}
        />
      );
    } else if (
      block !== {} &&
      block?.internal?.type === "ContentfulBlockFeaturedServices"
    ) {
      return (<FeaturedServices services={block.services} id={block.id} />);
    }
    return <div></div>;
  };

  console.log(pageBlocks);
  return (
    <Layout>
      <Seo title={seoTitle} description={seoDescription} />
      <h1>{title}</h1>
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
