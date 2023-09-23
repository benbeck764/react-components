import { Typography, SxProps, Theme } from "@mui/material";
import { FC, useState, Ref, useImperativeHandle } from "react";
import ReactQuill, { UnprivilegedEditor } from "react-quill";
import "react-quill/dist/quill.snow.css";
import { StyledLabelBox } from "@common";
import { editorFormats, toolbarOptions } from "./AppTextEditor.config";
import { StyledQuillWrapper } from "./AppTextEditor.styles";

type AppTextEditorProps = {
  defaultValue?: string;
  resetRef?: Ref<{ reset: (defaultValue?: string) => void }>;
  inputLabel?: string | React.ReactNode;
  containerSx?: SxProps<Theme>;
  editorSx?: SxProps<Theme>;
  onChange?: (raw: string, html: string) => void;
  errorLabel?: string | React.ReactNode;
  error?: boolean;
};

const AppTextEditor: FC<AppTextEditorProps> = (props: AppTextEditorProps) => {
  const {
    defaultValue,
    resetRef,
    inputLabel,
    containerSx,
    editorSx,
    onChange,
    errorLabel,
    error,
  } = props;

  const [focused, setFocused] = useState<boolean>(false);
  const [quillValue, setQuillValue] = useState<string>(defaultValue ?? "");

  useImperativeHandle(resetRef, () => ({
    reset(defaultValue?: string) {
      setQuillValue(defaultValue ?? "");
    },
  }));

  const handleOnChange = (
    _value: string,
    _delta: unknown,
    _source: unknown,
    editor: UnprivilegedEditor
  ): void => {
    setQuillValue(_value);
    const raw = editor.getText();
    const html = editor.getHTML();
    onChange?.(raw, html);
  };

  return (
    <>
      {inputLabel && (
        <StyledLabelBox>
          {typeof inputLabel === "string" && (
            <Typography sx={{ color: (theme) => theme.palette.grey[700] }}>
              {inputLabel}
            </Typography>
          )}
          {typeof inputLabel !== "string" && inputLabel}
        </StyledLabelBox>
      )}
      <StyledQuillWrapper
        containerSx={containerSx}
        editorSx={editorSx}
        focused={focused}
        error={error}
      >
        <ReactQuill
          theme="snow"
          value={quillValue}
          onChange={handleOnChange}
          modules={{
            toolbar: toolbarOptions,
          }}
          formats={editorFormats}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      </StyledQuillWrapper>
      {errorLabel && error && (
        <StyledLabelBox>
          <Typography
            sx={{
              color: (theme) =>
                error ? theme.palette.error.main : theme.palette.common.black,
            }}
          >
            {errorLabel}
          </Typography>
        </StyledLabelBox>
      )}
    </>
  );
};

export default AppTextEditor;
