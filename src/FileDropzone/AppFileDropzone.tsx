import { Box, Stack, SxProps, Typography, Theme } from "@mui/material";
import { FC, Ref, useEffect, useImperativeHandle, useState } from "react";
import { DropzoneOptions, useDropzone } from "react-dropzone";
import {
  StyledThumb,
  StyledInnerThumb,
  StyledImage,
  StyledDropzoneWrapper,
  StyledCloseButton,
  StyledDropzone,
} from "./AppFileDropzone.styles";
import { StyledLabelBox } from "../_common/styles/common-ui.styles";
import AppFileDropzoneImageTooltip from "./components/AppFileDropzoneImageTooltip";

export type DropzoneDefaultFile = {
  id: string;
  url: string;
};

export interface DropzoneFile extends File {
  id?: string;
  preview: string;
}

type AppFileDropzoneProps = DropzoneOptions & {
  defaultFiles?: DropzoneDefaultFile[];
  resetRef?: Ref<{ reset: (defaultFiles?: DropzoneDefaultFile[]) => void }>;
  inputLabel?: string | React.ReactNode;
  helperText?: string;
  wrapperSx?: SxProps<Theme>;
  dropzoneSx?: SxProps<Theme>;
  onChange?: ({
    addedFiles,
    removedFiles,
  }: {
    addedFiles: DropzoneFile[];
    removedFiles: string[];
  }) => void;
  disableRemoveFile?: boolean;
  preview?: boolean;
};

const AppFileDropzone: FC<AppFileDropzoneProps> = (
  props: AppFileDropzoneProps
) => {
  const {
    defaultFiles,
    resetRef,
    inputLabel,
    helperText,
    wrapperSx,
    dropzoneSx,
    onChange,
    disableRemoveFile,
    preview,
    ...dropzoneOptions
  } = props;

  const [initialFiles, setInitialFiles] = useState<DropzoneDefaultFile[]>(
    defaultFiles ?? []
  );
  const [removedFiles, setRemovedFiles] = useState<string[]>([]);
  const [files, setFiles] = useState<DropzoneFile[]>([]);

  const { getRootProps, getInputProps } = useDropzone({
    ...dropzoneOptions,
    multiple: true,
    onDrop: (acceptedFiles: File[]) => {
      const newDropzoneFiles = acceptedFiles.map((file: File) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      ) as DropzoneFile[];

      const allFiles = [...files, ...newDropzoneFiles];

      setFiles(allFiles);
      onChange?.({ addedFiles: allFiles, removedFiles });
    },
  });

  useImperativeHandle(resetRef, () => ({
    reset(defaultFiles?: DropzoneDefaultFile[]) {
      setInitialFiles(defaultFiles ?? []);
      setFiles([]);
      setRemovedFiles([]);
    },
  }));

  useEffect(() => {
    return () => {
      initialFiles.forEach((file: DropzoneDefaultFile) =>
        URL.revokeObjectURL(file.url)
      );
      files.forEach((file: DropzoneFile) => URL.revokeObjectURL(file.preview));
    };
  }, []);

  const removeFile = (fileToRemove: DropzoneFile): void => {
    setFiles(
      files.filter((f: DropzoneFile) => f.preview !== fileToRemove.preview)
    );
  };

  const removeInitialFile = (df: DropzoneDefaultFile): void => {
    setInitialFiles(
      initialFiles.filter(
        (initialFile: DropzoneDefaultFile) => initialFile.id !== df.id
      )
    );
    const allRemovedFiles = [...removedFiles, df.id];
    setRemovedFiles(allRemovedFiles);
    onChange?.({ addedFiles: files, removedFiles: allRemovedFiles });
  };

  return (
    <Box>
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
      <StyledDropzoneWrapper sx={wrapperSx}>
        <Box component="section">
          <StyledDropzone
            {...getRootProps({ className: "dropzone" })}
            sx={dropzoneSx}
            alignItems="center"
          >
            <input {...getInputProps()} />
            <Typography>
              {helperText ??
                `Drag 'n' drop some files here, or click to select files`}
            </Typography>
          </StyledDropzone>
        </Box>
        {preview && (
          <Stack
            direction="row"
            flexWrap="wrap"
            mt={initialFiles.length || files.length ? 2 : 0}
          >
            {initialFiles.map((df: DropzoneDefaultFile) => (
              <StyledThumb key={df.url}>
                {!disableRemoveFile && (
                  <StyledCloseButton onClick={() => removeInitialFile(df)} />
                )}
                <AppFileDropzoneImageTooltip imageUrl={df.url}>
                  <StyledInnerThumb>
                    <StyledImage src={df.url} />
                  </StyledInnerThumb>
                </AppFileDropzoneImageTooltip>
              </StyledThumb>
            ))}
            {files.map((file: DropzoneFile) => (
              <StyledThumb key={file.preview}>
                {!disableRemoveFile && (
                  <StyledCloseButton onClick={() => removeFile(file)} />
                )}

                <AppFileDropzoneImageTooltip imageUrl={file.preview}>
                  <StyledInnerThumb>
                    <StyledImage src={file.preview} />
                  </StyledInnerThumb>
                </AppFileDropzoneImageTooltip>
              </StyledThumb>
            ))}
          </Stack>
        )}
      </StyledDropzoneWrapper>
    </Box>
  );
};

export default AppFileDropzone;
