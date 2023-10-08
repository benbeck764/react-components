"use client";
import React, { FC, PropsWithChildren, useState } from "react";
import { SxProps, Theme } from "@mui/material/styles";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  StyledHeaderBox,
  StyledHeader,
  StyledSubheader,
} from "./AppDropdown.styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Collapse from "@mui/material/Collapse";

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

const AppDropdown: FC<PropsWithChildren<AppDropdownProps>> = (
  props: PropsWithChildren<AppDropdownProps>
) => {
  const {
    children,
    variant = "header",
    title,
    subTitle,
    titlePlaceholder,
    titleSx,
    contentWhenHidden,
    renderClosed,
    hideCaret,
    disabled,
    headerBoxSx,
    caretSx,
    caretSize,
    childrenBoxSx,
    sx,
    onOpen,
    disableHeaderClick,
  } = props;

  const [isOpen, setIsOpen] = useState(!renderClosed ?? true);

  const isTitleString = typeof title === "string" || title instanceof String;
  const isPlaceholderString =
    typeof titlePlaceholder === "string" || titlePlaceholder instanceof String;

  const toggleIsOpen = () => {
    if (disabled !== true) {
      if (!isOpen) onOpen?.();
      setIsOpen(!isOpen);
    }
  };

  return (
    <Box
      sx={{
        marginLeft: variant === "subheader" ? "10px" : "initial",
        ...sx,
      }}
    >
      <StyledHeaderBox
        onClick={() => !disableHeaderClick && toggleIsOpen()}
        sx={{
          cursor: disabled ? "default" : "pointer",
          ...headerBoxSx,
        }}
      >
        {variant === "header" && (
          <Box
            sx={{ display: "flex", alignItems: "center", width: "100%" }}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter") toggleIsOpen();
            }}
          >
            {!isOpen && titlePlaceholder && (
              <>
                {isPlaceholderString && (
                  <StyledHeader variant="h5" sx={titleSx}>
                    {titlePlaceholder}
                  </StyledHeader>
                )}
                {!isPlaceholderString && titlePlaceholder}
              </>
            )}
            {!titlePlaceholder && title && (
              <>
                {isTitleString && (
                  <StyledHeader variant="h5" sx={titleSx}>
                    {title}
                  </StyledHeader>
                )}
                {!isTitleString && title}
              </>
            )}
            {!Boolean(hideCaret) &&
              (isOpen ? (
                <ExpandLessIcon
                  fontSize={caretSize ?? "small"}
                  color="primary"
                  sx={{ position: "absolute", right: 0, ...caretSx }}
                  onClick={() => toggleIsOpen()}
                />
              ) : (
                <ExpandMoreIcon
                  fontSize={caretSize ?? "small"}
                  color="primary"
                  sx={{ position: "absolute", right: 0, ...caretSx }}
                  onClick={() => toggleIsOpen()}
                />
              ))}
          </Box>
        )}
        {variant === "subheader" && (
          <Box
            sx={{ display: "flex" }}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter") toggleIsOpen();
            }}
          >
            {!isOpen && titlePlaceholder && (
              <>
                {isPlaceholderString && (
                  <StyledSubheader>{titlePlaceholder}</StyledSubheader>
                )}
                {!isPlaceholderString && titlePlaceholder}
              </>
            )}
            {!titlePlaceholder && title && (
              <>
                {isTitleString && <StyledSubheader>{title}</StyledSubheader>}
                {!isTitleString && title}
              </>
            )}
            {!Boolean(hideCaret) &&
              (isOpen ? (
                <ExpandLessIcon
                  fontSize={caretSize ?? "small"}
                  color="primary"
                  sx={{ position: "absolute", right: 0, ...caretSx }}
                  onClick={() => toggleIsOpen()}
                />
              ) : (
                <ExpandMoreIcon
                  fontSize={caretSize ?? "small"}
                  color="primary"
                  sx={{ position: "absolute", right: 0, ...caretSx }}
                  onClick={() => toggleIsOpen()}
                />
              ))}
          </Box>
        )}
      </StyledHeaderBox>
      <Typography variant="paragraphSmall">{subTitle}</Typography>
      <Collapse in={isOpen}>
        <Box display={isOpen ? "hidden" : ""} sx={childrenBoxSx}>
          {children}
        </Box>
      </Collapse>
      {contentWhenHidden && !isOpen && <Box>{contentWhenHidden}</Box>}
    </Box>
  );
};

export default AppDropdown;
