import { graphql } from "gatsby";
import * as React from "react";
import Layout from "components/Layout";
import Seo from "components/Seo";
import BlockReturner from "features/BlockReturner";
import RichText from "components/RichText";
import { Container, Heading } from "@chakra-ui/react";

const PageTemplate = ({ data: page }) => {
  const {
    title,
    seoTitle,
    seoDescription: { seoDescription },
    pageBlocks,
    body,
  } = page.contentfulPage;

  return (
    <Layout>
      <Seo title={seoTitle} description={seoDescription} />
      {pageBlocks ? (
        pageBlocks.map((block, index) => (
          <BlockReturner
            block={block}
            key={block ? block.id : `empty-block-${index}`}
          />
        ))
      ) : (
        <Container py={8}>
          <Heading as="h1" color="primary">
            {title}
          </Heading>
          <RichText content={body} />
        </Container>
      )}
    </Layout>
  );
};

export default PageTemplate;

//

export const query = graphql`
  query PageTemplateQuery($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      title
      seoDescription {
        seoDescription
      }
      body {
        raw
      }
      seoTitle
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
        ... on ContentfulBlockText {
          id
          title
          content {
            raw
          }
          internal {
            type
          }
          cards {
            title
            description {
              raw
            }
            subtitle
            image {
              ...imageQuery
            }
            id
          }
        }
        ... on ContentfulBlockMediaText {
          id
          title
          photo {
            ...imageQuery
          }
          settingVariant
          content {
            raw
          }
          internal {
            type
          }
          startsOn
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
          backgroundColor
          textColor
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
