import { FC, ReactElement } from "react";
import { Box, Tooltip } from "@mui/material";
import AppCard from "../../Card/AppCard";

type AppFileDropzoneImageTooltipProps = {
  children: ReactElement<any, any>;
  imageUrl: string;
  disabled?: boolean;
};

const AppFileDropzoneImageTooltip: FC<AppFileDropzoneImageTooltipProps> = (
  props: AppFileDropzoneImageTooltipProps
) => {
  const { children, imageUrl, disabled } = props;
  return (
    <Tooltip
      slotProps={{
        tooltip: {
          sx: {
            padding: "0 !important",
          },
        },
      }}
      disableInteractive={true}
      disableHoverListener={disabled}
      disableTouchListener={true}
      title={
        <AppCard paperSx={{ p: 1 }}>
          <Box width={250} height={250} component="img" src={imageUrl}></Box>
        </AppCard>
      }
    >
      {children}
    </Tooltip>
  );
};

export default AppFileDropzoneImageTooltip;
