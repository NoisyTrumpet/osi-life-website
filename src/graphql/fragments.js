import { graphql } from "gatsby";

export const imageQuery = graphql`
  fragment imageQuery on ContentfulAsset {
    title
    gatsbyImageData(
      quality: 90
      placeholder: BLURRED
      formats: [WEBP, PNG]
      layout: CONSTRAINED
    )
  }
`;

// export const placeFields = graphql`
//   fragment placeFields on SanityPlace {
//     address
//     coordinates {
//       lat
//       lng
//     }
//     _rawDescription(resolveReferences: { maxDepth: 10 })
//     googleMapsPlaceId
//     image {
//       asset {
//         fixed(width: 400, height: 400) {
//           ...GatsbySanityImageFixed
//         }
//       }
//     }
//     partOfTown {
//       name
//     }
//     priceRange {
//       value
//     }
//     title
//     website
//     ticket
//     conditionalField {
//       link
//     }
//   }
// `;

// export const eventFields = graphql`
//   fragment eventFields on SanityEvent {
//     _rawDescription(resolveReferences: { maxDepth: 10 })
//     endDateTime {
//       local
//     }
//     image {
//       asset {
//         fixed(width: 400, height: 400) {
//           ...GatsbySanityImageFixed
//         }
//       }
//     }
//     place {
//       ...placeFields
//     }
//     priceRange {
//       value
//     }
//     startDateTime {
//       local
//     }
//     title
//     website
//     ticket
//     conditionalField {
//       link
//     }
//   }
// `;
