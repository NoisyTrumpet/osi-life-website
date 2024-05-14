import React from "react";
import { Button } from "@chakra-ui/react";

const OsiButton = (color, type, text, link, isLink, onClick) => {
  return (
    <Button
      color={color || "primary"}
      type={type}
      as={isLink ? "a" : "button"}
      href={isLink && link && link}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default OsiButton;
