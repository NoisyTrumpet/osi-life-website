import React from "react";
import { Box, Container, Heading } from "@chakra-ui/react";
import RichText from "components/RichText";
import { GatsbyImage } from "gatsby-plugin-image";

type TextBlockProps = Queries.ContentfulBlockText & {
  className?: string;
};

const TextBlock = ({ id, title, content, cards }: TextBlockProps) => {
  const hasCards = cards && cards.length > 0;

  return (
    <Box className={`py-8 md:py-12`}>
      {title && (
        <Heading as="h2" textAlign="center">
          {title}
        </Heading>
      )}
      <Box py={2} px={10}>
        <Container
          maxW={`956px`}
          mx={`auto`}
          sx={{ h2: { fontSize: `var(--chakra-fontSizes-lg)` } }}
        >
          {content && <RichText content={content} />}
          {hasCards && (
            <Box
              className={`pt-6 flex flex-wrap justify-center md:justify-between`}
            >
              {cards.map((card) => (
                <Card key={card.id} {...card} />
              ))}
            </Box>
          )}
        </Container>
      </Box>
    </Box>
  );
};

const Card = ({
  id,
  title,
  description,
  image,
  subtitle,
}: Queries.ContentfulCard) => {
  return (
    <Box
      key={id}
      p={1}
      maxW={`250px`}
      textAlign={`center`}
      className={`flex flex-col items-center justify-start gap-3`}
    >
      <GatsbyImage
        image={image.gatsbyImageData}
        alt={image.title}
        className={`w-full`}
      />
      <div className={`flex flex-col`}>
        {title && (
          <Heading
            as="h3"
            textAlign="center"
            className={`uppercase text-lg text-black`}
          >
            {title}
          </Heading>
        )}
        {subtitle && (
          <Heading
            className={`text-center text-black uppercase text-sm`}
            as="h4"
          >
            {subtitle}
          </Heading>
        )}
        {description && (
          <RichText
            content={description}
            className={`text-center text-black text-xs`}
          />
        )}
      </div>
    </Box>
  );
};

export default TextBlock;
