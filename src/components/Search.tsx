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
  Stack,
  StackProps,
  TextField,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/hooks/storeHooks";
import { getQuery, setQuery } from "@/state/searchSlice";
import { useDebounce } from "@/hooks/useDebounce";

const SearchStyled = styled(Stack)(({ theme, sx }) => ({
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

export type PrimarySearchAppBarProps = StackProps & {};

export default function PrimarySearchAppBar({ sx }: PrimarySearchAppBarProps) {
  const query = useAppSelector(getQuery);
  const debouncedQuery = useDebounce(query, 500);
  const dispatch = useAppDispatch();
  const handleOnChange = (e: React.SyntheticEvent) => {
    const value = e.target.value;
    dispatch(setQuery(value));
  };
  React.useEffect(() => {
    console.log({ debouncedQuery });
  }, [debouncedQuery]);

  return (
    <SearchStyled sx={{ ...sx }}>
      <TextField
        fullWidth
        onChange={handleOnChange}
        value={query}
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
