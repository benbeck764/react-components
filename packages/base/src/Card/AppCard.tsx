"use client";
import { FC, PropsWithChildren, useState } from "react";
import { SxProps, Theme } from "@mui/material/styles";
import Card, { CardProps } from "@mui/material/Card";
import { StyledPaper } from "./AppCard.styles";

export interface AppCardProps extends CardProps {
  elevateOnHover?: boolean;
  paperSx?: SxProps<Theme>;
  cardSx?: SxProps<Theme>;
}

const AppCard: FC<PropsWithChildren<AppCardProps>> = (
  props: PropsWithChildren<AppCardProps>
) => {
  const [elevation, setElevation] = useState<number | undefined>(undefined);

  const { elevateOnHover, paperSx, cardSx, ...rest } = { ...props };

  const handleOnMouseOver = (): void => {
    if (elevateOnHover === true) setElevation(5);
  };
  const handleOnMouseOut = (): void => {
    if (elevateOnHover === true) setElevation(2);
  };

  return (
    <StyledPaper
      sx={{ ...paperSx }}
      elevation={elevation}
      onMouseOver={() => handleOnMouseOver()}
      onMouseOut={() => handleOnMouseOut()}
    >
      <Card sx={cardSx} {...rest}>
        {props.children}
      </Card>
    </StyledPaper>
  );
};

export default AppCard;
