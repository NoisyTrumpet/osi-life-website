import {
  CloseButton,
  Flex,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import * as React from "react";

export const MobileNavContent = (props) => {
  const { isOpen, onClose, children } = props;
  const bg = useColorModeValue("white", "gray.800");
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          transition={{
            duration: 0.1,
          }}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
        >
          <Flex
            direction="column"
            w="100%"
            bg={bg}
            h="fit-content"
            overflow="auto"
            pos="absolute"
            top={0}
            left={0}
            zIndex={20}
            px={4}
            py={4}
            boxShadow="0 0 0 1px gray.300"
          >
            {children}
            <IconButton
              size="lg"
              aria-label="Close menu"
              variant="ghost"
              onClick={onClose}
              pos="absolute"
              top={6}
              right={4}
              icon={<CloseButton fontSize="30px" />}
            />
          </Flex>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
