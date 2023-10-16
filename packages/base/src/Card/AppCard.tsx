"use client";
import { FC, PropsWithChildren, useState } from "react";
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
    <StyledPaper sx={{ ...paperSx }} elevation={0}>
      <Card sx={cardSx} {...rest}>
        {props.children}
      </Card>
    </StyledPaper>
  );
};

export default AppCard;
