import { ArrowRight } from "@mui/icons-material";
import { Box, Button, ButtonProps, Stack, Tooltip } from "@mui/material";
import React from "react";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";
import { betaDownloadURL, iosDownloadURL } from "@/consts";

type BetaDownloadProps = {
  color?: ButtonProps["color"];
  variant?: ButtonProps["variant"];
  stacked?: boolean;
};

export const BetaDownload = ({
  color = "info",
  variant = "outlined",
  stacked = false,
}: BetaDownloadProps) => {
  const handleClick = () => (window.location.href = iosDownloadURL);
  return (
    <Stack
      sx={{
        justifyContent: "center",
        flex: 1,
        alignItems: "center",
        my: 5,
        flexDirection: stacked ? "column" : { xs: "column", md: "row" },
      }}
    >
      <Box
        sx={{
          ".MuiButtonBase-root": {
            background: "silver",
            color: "sliver",
            ":hover": {
              background: "grey",
            },
          },
        }}
      >
        <Button
          color={color}
          onClick={handleClick}
          variant={variant}
          startIcon={<AppleIcon />}
          sx={{
            borderRadius: 20,
            border: "1px solid rgb(0, 56, 38)",
            px: 5,
            mr: stacked ? 0 : { xs: 0, md: 2 },
            mb: stacked ? 2 : { xs: 2, md: 0 },
          }}
        >
          Download for iOS
        </Button>
      </Box>
      <Tooltip arrow title="Android coming soon!">
        <Box
        // sx={{
        //   ".MuiButtonBase-root": {
        //     background: "darkgreen",
        //     color: "lightgreen",
        //     ":hover": {
        //       background: "darkgreen",
        //     },
        //   },
        // }}
        >
          <Button
            disabled
            color={color}
            onClick={handleClick}
            variant={variant}
            startIcon={<AndroidIcon />}
            sx={{
              borderRadius: 20,
              border: "1px solid rgb(0, 56, 38)",
              px: 5,
              ml: stacked ? 0 : { xs: 0, md: 2 },
            }}
          >
            Android coming soon
          </Button>
        </Box>
      </Tooltip>
    </Stack>
  );
};
