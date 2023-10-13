import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";

const StyledPageButton = styled(Button)(({ theme }) => ({
  paddingLeft: theme.spacing(1.5),
  paddingRight: theme.spacing(1.5),
  paddingTop: theme.spacing(0.5),
  paddingBottom: theme.spacing(0.5),
  minWidth: theme.spacing(2),
  width: theme.spacing(2),
}));

export const StyledPageClickerButton = styled(StyledPageButton)(
  ({ theme }) => ({
    ...theme.typography.paragraphSmallBold,
    color: theme.palette.primary.main,
    width: "auto",
  })
);

export const StyledPageButtonSelected = styled(StyledPageButton)(
  ({ theme }) => ({
    ...theme.typography.paragraphSmallBold,
    color: theme.palette.coolGrey[800],
    position: "relative",
  })
);

export const StyledPageButtonUnselected = styled(StyledPageButton)(
  ({ theme }) => ({
    ...theme.typography.paragraphSmall,
    color: theme.palette.coolGrey[800],
  })
);

export const StyledUnderline = styled(Box)(({ theme }) => ({
  height: 1,
  border: 0,
  borderTop: `1px solid ${theme.palette.common.black}`,
  position: "absolute",
  bottom: 0,
  left: "25%",
  width: "50%",
}));

export const StyledLabel = styled("label")(({ theme }) => ({
  ...theme.typography.paragraphSmallBold,
  color: theme.palette.primary.main,
}));

export const StyledSelect = styled(Select)(({ theme }) => ({
  ...theme.typography.paragraphSmallBold,
  color: theme.palette.coolGrey[800],
  "& .MuiSelect-select": {
    paddingBottom: "0px !important",
    paddingTop: "6px !important",
  },
}));

export const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  ...theme.typography.paragraphSmallBold,
  color: theme.palette.coolGrey[800],
}));

export const StyledEllipsis = styled("span")(({ theme }) => ({
  ...theme.typography.paragraphSmallBold,
  fontWeight: 400,
  color: theme.palette.coolGrey[500],
}));
