import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const StyledOverlayBox = styled(Box)({
  position: "fixed",
  top: 0,
  left: 0,
  height: "100vh",
  width: "100%",
  background: "rgba(168, 168, 168, 0.8)",
  zIndex: 100,
});

export const StyledCenteredBox = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  outline: "none",
});
