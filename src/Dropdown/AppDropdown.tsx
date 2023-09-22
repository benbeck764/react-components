import React, { FC, PropsWithChildren, useState } from "react";
import { Box, Collapse, Typography, SxProps, Theme } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  StyledHeaderBox,
  StyledHeader,
  StyledSubheader,
} from "./AppDropdown.styles";

export type AppDropdownVariant = "header" | "subheader";

export interface AppDropdownProps {
  variant?: AppDropdownVariant;
  title?: string | React.ReactNode;
  subTitle?: React.ReactNode;
  titlePlaceholder?: string | React.ReactNode;
  titleSx?: SxProps<Theme>;
  contentWhenHidden?: string | React.ReactNode;
  renderClosed?: boolean;
  hideCaret?: boolean;
  disabled?: boolean;
  headerBoxSx?: SxProps<Theme>;
  caretSx?: SxProps<Theme>;
  caretSize?: "small" | "large" | "inherit" | "medium";
  childrenBoxSx?: SxProps<Theme>;
  sx?: SxProps<Theme>;
  onOpen?: () => void;
  disableHeaderClick?: boolean;
}

export const AppDropdown: FC<PropsWithChildren<AppDropdownProps>> = (
  props: PropsWithChildren<AppDropdownProps>
) => {
  const [isOpen, setIsOpen] = useState(!props.renderClosed ?? true);

  const isTitleString =
    typeof props.title === "string" || props.title instanceof String;
  const isPlaceholderString =
    typeof props.titlePlaceholder === "string" ||
    props.titlePlaceholder instanceof String;

  const toggleIsOpen = () => {
    if (props.disabled !== true) {
      if (!isOpen) props.onOpen?.();
      setIsOpen(!isOpen);
    }
  };

  return (
    <Box
      sx={{
        marginLeft: props.variant === "subheader" ? "10px" : "initial",
        ...props.sx,
      }}
    >
      <StyledHeaderBox
        onClick={() => !props.disableHeaderClick && toggleIsOpen()}
        sx={{
          cursor: props.disabled ? "default" : "pointer",
          ...props.headerBoxSx,
        }}
      >
        {props.variant === "header" && (
          <Box
            sx={{ display: "flex", alignItems: "center", width: "100%" }}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter") toggleIsOpen();
            }}
          >
            {!isOpen && props.titlePlaceholder && (
              <>
                {isPlaceholderString && (
                  <StyledHeader variant="h5" sx={props.titleSx}>
                    {props.titlePlaceholder}
                  </StyledHeader>
                )}
                {!isPlaceholderString && props.titlePlaceholder}
              </>
            )}
            {!props.titlePlaceholder && props.title && (
              <>
                {isTitleString && (
                  <StyledHeader variant="h5" sx={props.titleSx}>
                    {props.title}
                  </StyledHeader>
                )}
                {!isTitleString && props.title}
              </>
            )}
            {!Boolean(props.hideCaret) &&
              (isOpen ? (
                <ExpandLess
                  fontSize={props.caretSize ?? "small"}
                  color="primary"
                  sx={{ position: "absolute", right: 0, ...props.caretSx }}
                  onClick={() => toggleIsOpen()}
                />
              ) : (
                <ExpandMore
                  fontSize={props.caretSize ?? "small"}
                  color="primary"
                  sx={{ position: "absolute", right: 0, ...props.caretSx }}
                  onClick={() => toggleIsOpen()}
                />
              ))}
          </Box>
        )}
        {props.variant === "subheader" && (
          <Box
            sx={{ display: "flex" }}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter") toggleIsOpen();
            }}
          >
            {!isOpen && props.titlePlaceholder && (
              <>
                {isPlaceholderString && (
                  <StyledSubheader>{props.titlePlaceholder}</StyledSubheader>
                )}
                {!isPlaceholderString && props.titlePlaceholder}
              </>
            )}
            {!props.titlePlaceholder && props.title && (
              <>
                {isTitleString && (
                  <StyledSubheader>{props.title}</StyledSubheader>
                )}
                {!isTitleString && props.title}
              </>
            )}
            {!Boolean(props.hideCaret) &&
              (isOpen ? (
                <ExpandLess
                  fontSize={props.caretSize ?? "small"}
                  color="primary"
                  sx={{ position: "absolute", right: 0, ...props.caretSx }}
                  onClick={() => toggleIsOpen()}
                />
              ) : (
                <ExpandMore
                  fontSize={props.caretSize ?? "small"}
                  color="primary"
                  sx={{ position: "absolute", right: 0, ...props.caretSx }}
                  onClick={() => toggleIsOpen()}
                />
              ))}
          </Box>
        )}
      </StyledHeaderBox>
      <Typography variant="mobileParagraphSmall">{props.subTitle}</Typography>
      <Collapse in={isOpen}>
        <Box display={isOpen ? "hidden" : ""} sx={props.childrenBoxSx}>
          {props.children}
        </Box>
      </Collapse>
      {props.contentWhenHidden && !isOpen && (
        <Box>{props.contentWhenHidden}</Box>
      )}
    </Box>
  );
};

AppDropdown.defaultProps = {
  variant: "header",
};
