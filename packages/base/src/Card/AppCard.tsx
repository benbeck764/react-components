"use client";
import { FC, PropsWithChildren, useState } from "react";
import { SxProps, Theme } from "@mui/material/styles";
//import { StyledPaper } from "./AppCard.styles";
import Card, { CardProps } from "@mui/material/Card";
import { StyledPaper } from "./AppCard.styles";
import Typography from "@mui/material/Typography";

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
    // <StyledPaper
    //   sx={{ ...paperSx }}
    //   elevation={elevation}
    //   onMouseOver={() => handleOnMouseOver()}
    //   onMouseOut={() => handleOnMouseOut()}
    // >
    //   <Card sx={cardSx} {...rest}>
    //     {props.children}
    //   </Card>
    // </StyledPaper>
    <h1>Help me!</h1>
  );
};

export default AppCard;
