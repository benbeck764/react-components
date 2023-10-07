import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled, Theme } from "@mui/material/styles";

export const StyledHeaderBox = styled(Box)(({ theme }: { theme: Theme }) => ({
  display: "flex",
  position: "relative",
  marginBottom: theme.spacing(1),
  WebkitTapHighlightColor: "transparent",
}));

export const StyledHeader = styled(Typography)(
  ({ theme }: { theme: Theme }) => ({
    color: theme.palette.common.black,
    textTransform: "uppercase",
  })
);

export const StyledSubheader = styled(Typography)(
  ({ theme }: { theme: Theme }) => ({
    color: theme.palette.primary.main,
    ...theme.typography.paragraphSmallBold,
  })
);
