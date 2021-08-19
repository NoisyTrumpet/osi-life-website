import React from "react";
import { Box, Container, Heading } from "@chakra-ui/react";
import RichText from "Components/RichText";

const TextBlock = ({ id, title, content }) => {
  return (
    <Box key={id} pt={8}>
      <Box px={8} pb={8} maxW={`1500px`} mx={`auto`}>
        {title && (
          <Heading as="h2" color="primary">
            {title}
          </Heading>
        )}
      </Box>

      <Box
        py={8}
        px={10}
        bg={`lightBG`}
        borderTopLeftRadius={100}
        borderTopRightRadius={100}
      >
        <Container
          maxW={`1500px`}
          mx={`auto`}
          sx={{ h2: { fontSize: `var(--chakra-fontSizes-lg)` } }}
        >
          {content && <RichText content={content} />}
        </Container>
      </Box>
    </Box>
  );
};

export default TextBlock;
