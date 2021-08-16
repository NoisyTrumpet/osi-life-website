const Button = {
  baseStyle: {
    color: "primary",
    borderTopRightRadius: "0px",
    borderTopLeftRadius: "22",
    borderBottomRightRadius: "22",
    borderBottomLeftRadius: "22",
    transition: "all 0.2s ease-in-out",
    fontFamily: `var(--chakra-fonts-heading)`,
    _hover: {
      borderTopRightRadius: "22",
    },
  },
  variants: {
    primary: {
      color: "white",
      backgroundColor: "primary",
      // _hover: {
      //   backgroundColor: "secondary",
      // },
    },
    secondary: {
      color: "white",
      backgroundColor: "secondary",
      // _hover: {
      //   backgroundColor: "primary",
      // },
    },
    darkGrey: {
      color: "white",
      backgroundColor: "darkGray",
    },
    success: {},
    alert: {},
    warning: {},
    error: {},
    link: {},
    disabled: {},
  },
};

export default Button;
