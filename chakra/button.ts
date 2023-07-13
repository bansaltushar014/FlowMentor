import { ComponentStyleConfig } from "@chakra-ui/theme";

export const Button: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: "60px",
    fontSize: "10pt",
    fontWeight: 700,
    _focus: {
      boxShadow: "none",
    },
  },

  sizes: {
    sm: {
      fontSize: "8pt",
    },
    md: {
      fontSize: "10pt",
    },
  },

  variants: {
    solid: {
      color: "white",
      bg: "#8E4585",
      _hover: {
        bg: "#8E4585",
      },
    },

    outline: {
      color: "blue.500",
      border: "1px solid",
      borderColor: "blue.500",
    },

    oauth: {
      height: "34px",
      border: "1px solid",
      borderColor: "gray.300",
      _hover: {
        bg: "gray.50",
      },
    },
  },
};
