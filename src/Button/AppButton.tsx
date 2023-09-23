import { forwardRef, ForwardedRef } from "react";
import { Button, ButtonProps } from "@mui/material";
import { BreakpointDevice, useBreakpoint } from "@common";

export interface AppButtonProps extends ButtonProps {}

const AppButton = forwardRef<HTMLButtonElement, AppButtonProps>(
  (props: AppButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const { ...buttonProps } = props;
    const { device } = useBreakpoint();

    const buttonPropsAugmented = { ...buttonProps };
    buttonPropsAugmented.size =
      buttonPropsAugmented.size ?? device === BreakpointDevice.Desktop
        ? "small"
        : "medium";

    return <Button ref={ref} {...buttonPropsAugmented}></Button>;
  }
);

export default AppButton;
