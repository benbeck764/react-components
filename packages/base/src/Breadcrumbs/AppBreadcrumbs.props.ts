import { BreadcrumbsProps } from "@mui/material/Breadcrumbs";
import { SxProps, Theme } from "@mui/material/styles";
import { ReactNode, ReactElement } from "react";

export type BreadcrumbItem = {
  displayName: ReactNode;
  path: string;
  params?: { [paramName: string]: string };
  queryParams?: { [paramName: string]: string };
  icon?: ReactElement;
};

export interface AppBreadcrumbsProps extends Omit<BreadcrumbsProps, "onClick"> {
  breadcrumbs: BreadcrumbItem[];
  sx?: SxProps<Theme>;
  allowLinkableFirst?: boolean;
  homeSettings?: {
    include?: boolean;
    mobile?: boolean;
    path?: string;
    displayName?: string;
  };
  onNavigate?: (fullPath: string) => void;
}
