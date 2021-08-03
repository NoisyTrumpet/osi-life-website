import * as React from "react";
import { Box, Text } from "@chakra-ui/react";
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { Link } from "gatsby";

const RichText = ({ content }) => {
  const Bold = ({ children }) => <strong>{children}</strong>;
  const TextWrapper = ({ children }) => <Text my={4}>{children}</Text>;

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
