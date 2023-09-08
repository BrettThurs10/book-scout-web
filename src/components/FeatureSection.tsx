import { Box, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

type FeatureSectionProps = {
  img?: string;
  imgLeft?: boolean;
  backgroundColor: string;
  text: { title: string; body: string };
};

export const FeatureSection = ({
  img,
  imgLeft = false,
  backgroundColor,
  text,
}: FeatureSectionProps) => {
  return (
    <Box
      sx={{
        background: (theme) =>
          theme.palette[backgroundColor].main ||
          theme.palette[backgroundColor].default,

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: 5,
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: imgLeft ? "row" : "row-reverse",
          flex: 1,
        }}
      >
        <Stack
          sx={{
            backgroundImage: `url(${img})`, // Use the imported image
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: `${imgLeft ? "right" : "left"} center`,
            minHeight: 500,

            flex: 1,
          }}
        />

        <Box
          sx={{
            flex: 1,
            justifyContent: "center",
            alignItems: "flex-start",
            display: "flex",
            flexDirection: "column",

            p: 10,
          }}
        >
          <Typography
            variant="h4"
            color={backgroundColor === "background" ? "info" : "black"}
            sx={{ fontWeight: 600 }}
          >
            {text.title}
          </Typography>
          <Typography
            color={backgroundColor === "background" ? "info" : "black"}
            sx={{ pt: 1 }}
          >
            {text.body}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
