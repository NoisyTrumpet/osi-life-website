import {
  Box,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
} from "@chakra-ui/react";
import { FaMinus, FaPlus } from "react-icons/fa";
import RichText from "components/RichText";
import React from "react";
import PhotoWrapper from "SVG/PhotoWrapper";

const FAQs = ({ id, title, photo, variant, items }) => {
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
            width: ["680px", "680px", "680px", "750px", "750px"],
            maxWidth: "100%",
            height: "auto",
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
          crossColor={(variant === "Secondary" && "#00ADBC") || "#FFA500"}
          flip={variant === "Primary" && "-1"}
        />
      </Box>
      <Box
        flex={[`100%`, `100%`, `100%`, `60%`, `60%`]}
        px={[2, 2, 8, 8, 8]}
        py={2}
        mx={4}
        my={`auto`}
      >
        <Text
          as="h2"
          align={`center`}
          fontSize={[28, 28, 36, 36, 36]}
          color={`primary`}
          fontWeight={500}
          my={4}
          fontFamily={`var(--chakra-fonts-heading)`}
        >
          {title}
        </Text>

        {items.map((item) => {
          return (
            <Accordion allowToggle key={item.id}>
              <AccordionItem borderBottomColor={`secondary`} borderTop={`none`}>
                {({ isExpanded }) => (
                  <>
                    <AccordionButton
                      color={`primary`}
                      fontWeight={500}
                      fontSize={18}
                    >
                      <Box flex={`1`} textAlign={`left`}>
                        {item.question}
                      </Box>
                      {/* <AccordionIcon /> */}
                      {isExpanded ? (
                        <FaMinus fontSize="14px" />
                      ) : (
                        <FaPlus fontSize="14px" />
                      )}
                    </AccordionButton>
                    <AccordionPanel py={4} textAlign={`left`}>
                      <RichText content={item.answer} />
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>
          );
        })}
      </Box>
    </Flex>
  );
};

export default FAQs;
