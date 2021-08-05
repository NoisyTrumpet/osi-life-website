import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import RichText from "Components/RichText";

const TextBlock = ({ id, title, content }) => {
  return (
    <Box key={id} pt={8}>
      <Box px={8} pb={8}>
        {title && (
          <Heading as="h2" color="primary">
            {title}
          </Heading>
        )}
      </Box>

      <Box
        py={8}
        px={8}
        bg={`lightBG`}
        borderTopLeftRadius={100}
        borderTopRightRadius={100}
      >
        {content && <RichText content={content} />}
      </Box>
    </Box>
  );
};

export default TextBlock;
