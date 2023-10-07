"use client";
import { FC } from "react";
import { SxProps, Theme } from "@mui/material/styles";
import CancelIcon from "@mui/icons-material/Cancel";
import Chip from "@mui/material/Chip";

type AppChipProps = {
  label?: string | React.ReactNode;
  index?: number;
  sx?: SxProps<Theme>;
  icon?:
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | undefined;
  onEdit?: (index?: number, label?: string) => void;
  onDelete?: (index?: number) => void;
};

const AppChip: FC<AppChipProps> = (props: AppChipProps) => {
  const { label, index, sx, icon, onEdit, onDelete } = props;
  const isLabelString = typeof label === "string";

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      onDelete?.(index);
    }
  };

  const handleDoubleClick = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement;
    if (isLabelString && target.textContent !== label) {
      return;
    }
    onEdit?.(index, isLabelString ? label : undefined);
  };

  return (
    <Chip
      label={label}
      sx={sx}
      onKeyDown={handleKeyDown}
      onDoubleClick={handleDoubleClick}
      icon={icon}
      {...(onDelete && {
        deleteIcon: (
          <CancelIcon onMouseDown={(event) => event.stopPropagation()} />
        ),
      })}
      {...(onDelete && {
        onDelete: () => onDelete?.(index),
      })}
    />
  );
};

export default AppChip;
