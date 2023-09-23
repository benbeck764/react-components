import { BreadcrumbsProps, SxProps, Theme } from "@mui/material";

export type BreadcrumbItem = {
  displayName: React.ReactNode;
  path: string;
  params?: { [paramName: string]: string };
  queryParams?: { [paramName: string]: string };
  icon?: React.ReactElement;
};

type AppBreadCrumbVariant = "text" | "chip";

export interface AppBreadcrumbsProps extends Omit<BreadcrumbsProps, "onClick"> {
  breadcrumbs: BreadcrumbItem[];
  sx?: SxProps<Theme>;
  allowLinkableFirst?: boolean;
  variant?: AppBreadCrumbVariant;
  onNavigate?: (fullPath: string) => void;
}
