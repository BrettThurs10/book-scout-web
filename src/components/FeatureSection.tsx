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
    <section>
      <Box
        sx={{
          background: (theme) =>
            //@ts-ignore
            theme.palette[backgroundColor].main ||
            //@ts-ignore
            theme.palette[backgroundColor].default,

          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          py: { xs: 0, md: 10 },
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column-reverse",
              md: imgLeft ? "row" : "row-reverse",
            },
            flex: 1,
          }}
        >
          <Stack
            sx={{
              backgroundImage: `url(${img})`, // Use the imported image
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: {
                xs: "center center",
                md: `${imgLeft ? "right" : "left"} center`,
              },
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

              p: 5,
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
    </section>
  );
};
