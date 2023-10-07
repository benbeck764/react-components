"use client";
import Grid from "@mui/material/Grid";
import * as CSS from "csstype";
import { AppGridCardCommonProps } from "./common";
import { StyledCard } from "../AppGridCardView.styles";
import { AppGridSkeletonCard } from "./AppGridSkeletonCard";

export interface AppGridCardProps<TItem> extends AppGridCardCommonProps<TItem> {
  item: TItem | undefined;
}

export function AppGridCard<TItem>(
  props: AppGridCardProps<TItem>
): JSX.Element {
  const item = props.item;
  if (!item) {
    return (
      <AppGridSkeletonCard cardViewDefinition={props.cardViewDefinition} />
    );
  }

  const virtualizedRow =
    props.cardViewDefinition.virtualizedProps?.enabled ?? false;
  const content = props.cardViewDefinition.getContent(item, props.index);

  let cursorStyle: CSS.Property.Cursor = "default";
  if (props.onItemClicked) {
    cursorStyle = "pointer";
  }

  if (props.cursorStyle !== undefined) {
    if (typeof props.cursorStyle === "function") {
      cursorStyle = props.cursorStyle(item, "table");
    } else {
      cursorStyle = props.cursorStyle;
    }
  }

  let hover = props.hover;

  return (
    <Grid item xs={12 / props.cardViewDefinition.columnCount}>
      <StyledCard
        onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const target = event.target as unknown as any;
          if (
            target?.nodeName === "BUTTON" ||
            target?.offsetParent?.nodeName === "BUTTON"
          )
            return;
          props.onItemClicked?.(item, "card");
        }}
        onKeyDown={(event: React.KeyboardEvent<HTMLDivElement>) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const target = event.target as unknown as any;
          if (
            target?.nodeName === "BUTTON" ||
            target?.offsetParent?.nodeName === "BUTTON"
          )
            return;
          if (event.key === "Enter") props.onItemClicked?.(item, "card");
        }}
        sx={{
          padding: 0,
          cursor: cursorStyle,
          ...(virtualizedRow ? { height: "100%" } : {}),
          ...props.cardViewDefinition.cardSx,
        }}
        data-hover={hover}
      >
        {content}
      </StyledCard>
    </Grid>
  );
}
