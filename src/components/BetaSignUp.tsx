import { ArrowRight } from "@mui/icons-material";
import { Box, Button, ButtonProps, Stack } from "@mui/material";
import React from "react";

type BetaSignUpProps = {
  leftAligned?: boolean;
  color?: ButtonProps["color"];
  variant?: ButtonProps["variant"];
};

export const BetaSignUp = ({
  leftAligned = false,
  color = "info",
  variant = "outlined",
}: BetaSignUpProps) => {
  const handleClick = () =>
    (window.location.href = "http://eepurl.com/izkKm-/");
  return (
    <Stack
      sx={{
        justifyContent: "center",
        flex: 1,
        alignItems: leftAligned ? "flex-start" : "center",
        my: 5,
      }}
    >
      <Box>
        <Button
          color={color}
          onClick={handleClick}
          variant={variant}
          endIcon={<ArrowRight />}
          sx={{ borderRadius: 20, border: "1px solid rgb(0, 56, 38)", px: 10 }}
        >
          Sign up
        </Button>
      </Box>
    </Stack>
  );
};
