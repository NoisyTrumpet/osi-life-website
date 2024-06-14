import { graphql, PageProps } from "gatsby";
import * as React from "react";
import Layout from "components/Layout";
import Seo from "components/Seo";
import BlockReturner from "features/BlockReturner";

const IndexPage = ({ data }: any) => {
  const {
    // title,
    seoTitle,
    seoDescription: { seoDescription },
    pageBlocks,
  } = data.contentfulPage as Queries.ContentfulPage;

  return (
    <Layout>
      <Seo title={seoTitle} description={seoDescription} />
      {pageBlocks.map((block, index) => (
        <BlockReturner block={block} key={block.id} />
      ))}
    </Layout>
  );
};

export default IndexPage;

//

export const homeQuery = graphql`
  query homeQuery {
    contentfulPage(title: { eq: "Home" }) {
      id
      seoDescription {
        seoDescription
      }
      seoMetaRobotsNofollow
      seoMetaRobotsNoindex
      seoTitle
      title
      pageBlocks {
        ... on ContentfulBlockNewHero {
          id
          bodyText {
            raw
          }
          mediaItems {
            ...imageQuery
          }
          button {
            id
            label
            link
            variant
          }
          bottomTitle
          wins {
            items {
              icon
              label
            }
          }
          internal {
            type
          }
        }
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
        ... on ContentfulBlockFeatures {
          id
          title
          benefits {
            id
            title
            subtitle
            icon {
              file {
                url
              }
              ...imageQuery
            }
            description {
              raw
            }
            accentColor
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
          variant
          backgroundColor
          accentColor
        }
        ... on ContentfulBlockFeaturedTestimonials {
          id
          title
          testimonials {
            id
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
        ... on ContentfulBlockVisualList {
          id
          title
          settingVariant
          items {
            id
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
