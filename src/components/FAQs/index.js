import {
  Box,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Flex,
} from "@chakra-ui/react";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { Link } from "gatsby";
import React from "react";
import PhotoWrapper from "SVG/PhotoWrapper";

const FAQs = ({ id, title, photo, variant, items }) => {
  const TextWrapper = ({ children }) => (
    <Text color={`red`} className="styleing">
      {children}
    </Text>
  );
  const Linker = ({ children, data }) => {
    const link = data.data.uri;
    return (
      <Link to={link} aria-label={children} fontWeight="bold">
        {children}
      </Link>
    );
  };

  const options = {
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => (
        <Linker data={node}>{children}</Linker>
      ),
      [BLOCKS.text]: (node, children) => <TextWrapper>{children}</TextWrapper>,
      [BLOCKS.list_item]: (node, children) => (
        <TextWrapper>{children}</TextWrapper>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        return (
          <>
            <h2>Embedded Asset</h2>
            <pre>
              <code>{JSON.stringify(node, null, 2)}</code>
            </pre>
          </>
        );
      },
    },
  };

  return (
    <Flex
      flexDirection={[
        `column`,
        `column`,
        `column`,
        (variant === "Secondary" && `row-reverse`) || `row`,
        variant === "Secondary" && `row-reverse`,
      ]}
      my={`4rem`}
      bg={variant === "Secondary" && `lightGrayBG`}
      borderTopLeftRadius={variant === "Secondary" && 140}
      key={id}
    >
      <Box
        flex={[`100%`, `100%`, `100%`, `40%`, `40%`]}
        my={`auto`}
        position="relative"
        overflow="hidden"
        alignSelf={variant === "Secondary" && "flex-end"}
        sx={{
          svg: {
            width: "750px",
            maxWidth: "100%",
            top: "0",
            left: variant === "Secondary" && "20%",
            right: variant === "Primary" && "20%",
            position: "relative",
            transform: variant === "Primary" && "scaleX(-1)",
          },
        }}
      >
        <PhotoWrapper
          image={photo.gatsbyImageData.images.fallback.src}
          width={photo.gatsbyImageData.width}
          height={photo.gatsbyImageData.height}
          imgAlt={photo.title}
          id={photo.id}
          fillColor={(variant === "Secondary" && "#00ADBC") || "#FFA500"}
        />
      </Box>
      <Box
        flex={[`100%`, `100%`, `100%`, `60%`, `60%`]}
        px={[2, 2, 4, 8, 8]}
        py={2}
        mx={4}
        my={`auto`}
      >
        <Text
          as="h2"
          align={`center`}
          fontSize={28}
          color={`primary`}
          fontWeight={500}
          my={4}
        >
          {title}
        </Text>

        {items.map((item) => {
          return (
            <Accordion allowToggle>
              <AccordionItem borderBottomColor={`secondary`} borderTop={`none`}>
                <AccordionButton
                  color={`primary`}
                  fontWeight={500}
                  fontSize={18}
                >
                  <Box flex={`1`} textAlign={`left`}>
                    {item.question}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel py={4} textAlign={`left`}>
                  {renderRichText(item.answer, options)}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          );
        })}
      </Box>
    </Flex>
  );
};

export default FAQs;