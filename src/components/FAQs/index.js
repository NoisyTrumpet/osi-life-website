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
    <Box
      bg={variant === "Secondary" && `lightGrayBG`}
      borderTopLeftRadius={variant === "Secondary" && 140}
      overflowX={{ base: `hidden` }}
    >
      <Flex
        flexDirection={[
          `column`,
          `column`,
          `column`,
          (variant === "Secondary" && `row-reverse`) || `row`,
          variant === "Secondary" && `row-reverse`,
        ]}
        mb={`4rem`}
        maxWidth={`1500px`}
        mx={`auto`}
        key={id}
      >
        <Box
          flex={[`100%`, `100%`, `100%`, `40%`, `40%`]}
          my={`auto`}
          align={`top`}
          position="relative"
          alignSelf={variant === "Secondary" && "flex-end"}
          sx={{
            svg: {
              width: ["680px", "680px", "680px", "750px", "750px"],
              maxWidth: "100%",
              height: "auto",
              top: "0",
              left: variant === "Secondary" && "25%",
              right: variant === "Primary" && "25%",
              position: "relative",
              transform: variant === "Primary" && "scaleX(-1)",
            },
          }}
        >
          <PhotoWrapper
            image={photo}
            safariSource={photo.file.url}
            width={photo.gatsbyImageData.width}
            height={photo.gatsbyImageData.height}
            imgAlt={photo.title}
            id={photo.id}
            fillColor={(variant === "Secondary" && "#00ADBC") || "#FFA500"}
            crossColor={(variant === "Secondary" && "#00ADBC") || "#FFA500"}
            crossesFlip={variant === "Primary" && "-1"}
            imageFlip={variant === "Secondary" && "-1"} // either 1 or -1
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
              <Accordion
                allowToggle
                _last={{
                  ".questions": {
                    border: "none",
                  },
                }}
                sx={{
                  ".questions": {
                    borderBottomColor: "secondary",
                    borderTop: "none",
                  },
                }}
              >
                <AccordionItem
                  // borderBottomColor={`secondary`}
                  // borderTop={`none`}
                  key={item.id}
                  className="questions"
                >
                  {({ isExpanded }) => (
                    <>
                      <AccordionButton
                        color={`primary`}
                        fontWeight={500}
                        fontSize={18}
                        fontFamily={`var(--chakra-fonts-heading)`}
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
    </Box>
  );
};

export default FAQs;
