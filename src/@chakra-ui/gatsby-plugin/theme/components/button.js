const Button = {
  baseStyle: {
    color: "primary",
    borderTopRightRadius: "0px",
    borderTopLeftRadius: "22",
    borderBottomRightRadius: "22",
    borderBottomLeftRadius: "22",
  },
  variants: {
    primary: {
      color: "white",
      backgroundColor: "primary",
      _hover: {
        backgroundColor: "secondary",
      },
    },
    secondary: {
      color: "white",
      backgroundColor: "secondary",
      _hover: {
        backgroundColor: "primary",
      },
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
