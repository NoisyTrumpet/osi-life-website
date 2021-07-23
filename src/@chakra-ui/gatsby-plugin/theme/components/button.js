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
    },
    secondary: {
      color: "white",
      backgroundColor: "secondary",
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
