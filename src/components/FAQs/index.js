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
  //   const { PatientFAQs, ProviderFAQs, CCMFAQs } = useStaticQuery(faqQuery);
  //   console.log(PatientFAQs);
  //   console.log(ProviderFAQs);
  //   console.log(CCMFAQs);

  // const PatientImg = getImage(PatientFAQs.photo);
  // const ProviderImg = getImage(ProviderFAQs.photo);
  // const CCMImg = getImage(CCMFAQs.photo);

  // const { questions: PatientItems } = PatientFAQs;
  // const { questions: ProviderItems } = ProviderFAQs;
  // const { questions: CCMItems } = CCMFAQs;
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
    // renderMark: {
    //   [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
    // },
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
      flexDirection={variant === "Secondary" && `row-reverse`}
      my={`4rem`}
      bg={variant === "Secondary" && `lightGrayBG`}
      borderTopLeftRadius={variant === "Secondary" && 140}
      key={id}
    >
      <Box
        flex={`40%`}
        my={`auto`}
        position="relative"
        overflow="hidden"
        sx={{
          svg: {
            width: "750px",
            maxWidth: "100%",
            top: "0",
            left: variant === "Secondary" && "100",
            right: variant === "Primary" && "100",
            position: "relative",
            transform: variant === "Primary" && "scaleX(-1)",
            // fillColor: {mode("Primary")},
          },
        }}
      >
        <PhotoWrapper
          image={photo.gatsbyImageData.images.fallback.src}
          width={photo.gatsbyImageData.width}
          height={photo.gatsbyImageData.height}
          alt={photo.title}
          id={photo.id}
        />
      </Box>
      <Box flex={`60%`} px={8} py={2} mx={4} my={`auto`}>
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
