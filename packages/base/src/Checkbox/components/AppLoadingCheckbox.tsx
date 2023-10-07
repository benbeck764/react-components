"use client";
import { FC } from "react";
import AppCheckbox from "../AppCheckbox";
import { AppCheckboxSize } from "../AppCheckbox.props";
import { SxProps, Theme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

type AppLoadingCheckboxProps = {
  containerSx?: SxProps<Theme>;
  size?: AppCheckboxSize;
  label?: JSX.Element;
};

export const AppLoadingCheckbox: FC<AppLoadingCheckboxProps> = (
  props: AppLoadingCheckboxProps
) => {
  const size = props.size === "medium" ? "25px" : "16px";

  return (
    <Box sx={{ display: "inline-flex", width: "100%", ...props.containerSx }}>
      <Box sx={{ mr: 1, display: "flex" }}>
        <Skeleton variant="rectangular" width={size} height={size}>
          <AppCheckbox
            size={props.size}
            item={{ label: "", checked: false }}
            onCheckedChanged={() => void 0}
            variant="primary"
            icon="check"
            checkboxProps={{
              sx: {
                p: 0,
              },
            }}
          />
        </Skeleton>
      </Box>
      {props.label && (
        <Skeleton variant="text" height={size}>
          {props.label}
        </Skeleton>
      )}
    </Box>
  );
};
