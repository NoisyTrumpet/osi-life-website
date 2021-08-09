import * as React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { Link } from "gatsby";

const RichText = ({ content }) => {
  const Bold = ({ children }) => <strong>{children}</strong>;
  const TextWrapper = ({ children }) => <Text py={2}>{children}</Text>;

  const Linker = ({ children, data }) => {
    const link = data.data.uri;
    return (
      <Link to={link} aria-label={children}>
        {children}
      </Link>
    );
  };

  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
    },
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => (
        <Heading as="h1" fontSize="3xl" mb={3} color="primary">
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <Heading as="h2" fontSize="xl" mt={4} mb={2} color="primary">
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <Heading as="h3" fontSize="lg" mt={4} mb={1} color="primary">
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_4]: (node, children) => (
        <Heading as="h4" fontSize="md" mt={4} mb={1} color="primary">
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_5]: (node, children) => (
        <Heading as="h5" fontSize="md" mt={4} mb={1} color="primary">
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_6]: (node, children) => (
        <Heading as="h6" fontSize="xs" mt={4} mb={1} color="primary">
          {children}
        </Heading>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <TextWrapper>{children}</TextWrapper>
      ),
      [INLINES.HYPERLINK]: (node, children) => (
        <Linker data={node}>{children}</Linker>
      ),
      [BLOCKS.LIST_ITEM]: (node, children) => (
        <li>{node.content[0].content[0].value}</li>
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

  return <Box>{renderRichText(content, options)}</Box>;
};

export default RichText;
