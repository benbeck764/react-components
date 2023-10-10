"use client";
import Box from "@mui/material/Box";
import { Theme, styled } from "@mui/material/styles";

export const StyledTestBox = styled(Box)(({ theme }: { theme: Theme }) => ({
  width: 500,
  height: 500,
  backgroundColor: "red",
}));
