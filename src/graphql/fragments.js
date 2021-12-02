import { graphql } from "gatsby";

export const imageQuery = graphql`
  fragment imageQuery on ContentfulAsset {
    title
    id
    file {
      url
      details {
        image {
          height
          width
        }
      }
    }
    gatsbyImageData(
      formats: [AUTO, WEBP, AVIF]
      quality: 90
      layout: CONSTRAINED
      placeholder: BLURRED
    )
  }
`;
