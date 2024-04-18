import { graphql } from "gatsby";
import * as React from "react";
import Layout from "Components/Layout";
import Seo from "Components/Seo";
// import loadable from "@loadable/component";

import BlockReturner from "Features/BlockReturner";

const IndexPage = ({ data }) => {
  const {
    // title,
    seoTitle,
    seoDescription: { seoDescription },
    pageBlocks,
  } = data.contentfulPage;

  return (
    <Layout>
      <Seo title={seoTitle} description={seoDescription} />
      {pageBlocks.map((block, index) => (
        <BlockReturner
          block={block}
          key={block ? block.id : `empty-block-${index}`}
        />
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
            icon {
              file {
                url
              }
            }
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
        ... on ContentfulBlockFeaturedServicesHome {
          id
          title
          subtitle
          internal {
            type
          }
          services {
            title
            subtitle
            description {
              raw
            }
            image {
              ...imageQuery
            }
            page {
              slug
            }
          }
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
