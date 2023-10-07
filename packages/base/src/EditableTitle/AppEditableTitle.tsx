"use client";
import EditIcon from "@mui/icons-material/Edit";
import React, { FC, useEffect, useRef, useState } from "react";
import { OverridableStringUnion } from "@mui/types";
import { Variant } from "@mui/material/styles/createTypography";
import { StyledContainer, StyledTextField } from "./AppEditableTitle.styles";
import { TypographyPropsVariantOverrides } from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";

type AppEditableTitleProps = {
  defaultEditState?: boolean;
  defaultValue?: string;
  size?: "small" | "medium";
  variant: OverridableStringUnion<Variant, TypographyPropsVariantOverrides>;
  maxLength?: number;
  refresh?: boolean; // Forces the component to re-render when value hasn't changed but text has (i.e. when validation fails)
  loading?: boolean;
  skeletonCharCount?: number;
  onChange?: (value: string) => void;
  onSubmit?: (value: string) => void;
  autoFocus?: boolean;
  placeholder?: string;
  error?: boolean;
};

const AppEditableTitle: FC<AppEditableTitleProps> = (
  props: AppEditableTitleProps
) => {
  const [text, setText] = useState<string | undefined>(props.defaultValue);
  const [editMode, setEditMode] = useState<boolean | undefined>(
    props.defaultEditState
  );

  const inputRef = useRef<HTMLInputElement>();

  useEffect(() => {
    if (props.defaultValue) {
      setText(props.defaultValue);
    }
  }, [props.defaultValue]);

  useEffect(() => {
    if (editMode && inputRef.current) {
      inputRef.current?.select();
    }
  }, [editMode]);

  const handleOnClickEdit = () => {
    setEditMode(true);
  };

  const closeInputAndSubmit = () => {
    props.onSubmit?.(text ?? "");
    setEditMode(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event && (event.key === "Escape" || event.key === "Enter"))
      closeInputAndSubmit();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    let inputText = e?.target?.value;
    if (inputText != null) {
      if (props.maxLength) {
        inputText = inputText.slice(
          0,
          Math.min(inputText.length, props.maxLength)
        );
      }
      setText(inputText);
      props.onChange?.(inputText);
    }
  };

  return (
    <Box>
      <Stack gap={1} direction="row">
        <StyledContainer>
          <StyledTextField
            InputProps={{
              inputRef: inputRef,
            }}
            fullWidth
            variant="standard"
            value={text}
            disabled={editMode ? false : true}
            onKeyDown={handleKeyDown}
            onFocus={(e) => e.target.select()}
            onBlur={() => closeInputAndSubmit()}
            onChange={handleChange}
            placeholder={props.placeholder}
            error={props.error}
            $textVariant={props.variant}
            $size={props.size}
          />
        </StyledContainer>
        {!editMode && (
          <IconButton
            tabIndex={0}
            onClick={handleOnClickEdit}
            onKeyPress={(e: React.KeyboardEvent<HTMLSpanElement>) =>
              e.key === "Enter" && handleOnClickEdit()
            }
            color={props.error ? "error" : "default"}
          >
            <EditIcon />
          </IconButton>
        )}
      </Stack>
    </Box>
  );
};

AppEditableTitle.defaultProps = {
  defaultEditState: false,
};

export default AppEditableTitle;
