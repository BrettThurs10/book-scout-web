import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  BoxProps,
  IconButton,
  Input,
  InputAdornment,
  TextField,
} from "@mui/material";

const SearchStyled = styled(Box)(({ theme, sx }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  ".MuiInputBase-root": {
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    ".MuiInputBase-input": {
      padding: "15px 20px",
    },
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
  sx,
}));

export type PrimarySearchAppBarProps = BoxProps & {};

export default function PrimarySearchAppBar(props: PrimarySearchAppBarProps) {
  return (
    <SearchStyled sx={{ display: "flex", flex: 1, width: "100%" }}>
      <TextField
        fullWidth
        inputProps={{
          sx: { color: "white", width: "100%" },
        }}
        InputProps={{
          sx: { borderRadius: 100 },
          endAdornment: (
            <InputAdornment position="start">
              <IconButton>
                <SearchIcon sx={{ fill: "white" }} color="inherit" />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </SearchStyled>
  );
}
