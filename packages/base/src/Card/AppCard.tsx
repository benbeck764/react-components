"use client";
import { FC, PropsWithChildren } from "react";
import { SxProps, Theme } from "@mui/material/styles";
import Card, { CardProps } from "@mui/material/Card";
import { StyledPaper } from "./AppCard.styles";

export interface AppCardProps extends CardProps {
  paperSx?: SxProps<Theme>;
  cardSx?: SxProps<Theme>;
}

const AppCard: FC<PropsWithChildren<AppCardProps>> = (
  props: PropsWithChildren<AppCardProps>
) => {
  const { paperSx, cardSx, ...rest } = { ...props };

  return (
    <StyledPaper sx={{ ...paperSx }}>
      <Card sx={cardSx} {...rest} elevation={0}>
        {props.children}
      </Card>
    </StyledPaper>
  );
};

export default AppCard;
