"use client";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const StyledLabelBox = styled(Box)(({ theme }) => ({
  textAlign: "left",
  paddingBottom: theme.spacing(0.5),
  paddingTop: theme.spacing(0.5),
}));
