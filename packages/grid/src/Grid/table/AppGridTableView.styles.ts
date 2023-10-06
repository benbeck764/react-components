import { styled, Box, TableContainer, TableRow } from "@mui/material";

export const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  borderRadius: 0,
  borderTopLeftRadius: theme.shape.borderRadius,
  borderTopRightRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.grey[100],
}));

export const StyledTableRowHeader = styled(TableRow)(({ theme }) => ({
  "& > th:first-of-type": {
    borderTopLeftRadius: theme.shape.borderRadius,
  },
  "& > th:last-of-type": {
    borderTopRightRadius: theme.shape.borderRadius,
  },
}));

export const StyledGridHeaderContainer = styled(Box)(({ theme }) => ({
  zIndex: 5,
  backgroundColor: theme.palette.grey[200],
  textTransform: "uppercase",
  borderTopLeftRadius: theme.shape.borderRadius * 2,
  borderTopRightRadius: theme.shape.borderRadius * 2,
}));

export const StyledGridHeaderRow = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  backgroundColor: "inherit",
  borderTopLeftRadius: theme.shape.borderRadius * 2,
  borderTopRightRadius: theme.shape.borderRadius * 2,

  "&": {
    ...theme.typography.h5,
  },
}));

export const StyledGridHeaderCell = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
}));
