import { BreadcrumbsProps } from "@mui/material/Breadcrumbs";
import { SxProps, Theme } from "@mui/material/styles";

export type BreadcrumbItem = {
  displayName: React.ReactNode;
  path: string;
  params?: { [paramName: string]: string };
  queryParams?: { [paramName: string]: string };
  icon?: React.ReactElement;
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
