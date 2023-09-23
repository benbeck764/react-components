import { FC } from "react";
import { Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
  StyledBreadcrumb,
  StyledBreadcrumbs,
  StyledLink,
} from "./AppBreadcrumbs.styles";
import { isString } from "@utilities";
import { AppBreadcrumbsProps, BreadcrumbItem } from "./AppBreadcrumbs.props";

const AppBreadcrumbs: FC<AppBreadcrumbsProps> = (
  props: AppBreadcrumbsProps
) => {
  const { breadcrumbs, sx, allowLinkableFirst, variant, onNavigate } = props;

  const replaceParams = (
    path: string,
    params: { [paramName: string]: string }
  ): string => {
    Object.entries(params).forEach(
      ([paramName, paramValue]) => (path = path.replace(paramName, paramValue))
    );
    return path;
  };

  const handleLinkClick = (breadcrumb: BreadcrumbItem): void => {
    let path = breadcrumb.path;
    if (breadcrumb.params && breadcrumb.params?.keys.length > 0) {
      path = replaceParams(breadcrumb.path, breadcrumb.params);
    }

    if (breadcrumb.queryParams) {
      const queryParams =
        "?" + new URLSearchParams(breadcrumb.queryParams).toString();
      path += queryParams;
    }

    onNavigate?.(path);
  };

  return (
    <StyledBreadcrumbs
      separator={
        <ChevronRightIcon
          fontSize="small"
          color="inherit"
          sx={{ alignSelf: "center" }}
        />
      }
      aria-label="breadcrumb"
      sx={sx}
    >
      {breadcrumbs.map((breadcrumb: BreadcrumbItem, index: number) => {
        const isFirst = index === 0;
        const isLast = index === breadcrumbs.length - 1;
        const key = isString(breadcrumb.displayName)
          ? (breadcrumb.displayName as string)
          : index;
        return isLast || (isFirst && !allowLinkableFirst) ? (
          variant === "chip" ? (
            <StyledBreadcrumb
              key={key}
              clickable={false}
              label={
                <Typography variant="paragraphBold">
                  {breadcrumb.displayName}
                </Typography>
              }
              icon={breadcrumb.icon}
            ></StyledBreadcrumb>
          ) : (
            <Typography key={key} variant="paragraphBold">
              {breadcrumb.displayName}
            </Typography>
          )
        ) : variant === "chip" ? (
          <StyledBreadcrumb
            key={key}
            clickable
            label={
              <StyledLink variant="paragraph">
                {breadcrumb.displayName}
              </StyledLink>
            }
            icon={breadcrumb.icon}
            onClick={() => handleLinkClick(breadcrumb)}
          ></StyledBreadcrumb>
        ) : (
          <StyledLink
            key={key}
            variant="paragraph"
            onClick={() => handleLinkClick(breadcrumb)}
          >
            {breadcrumb.displayName}
          </StyledLink>
        );
      })}
    </StyledBreadcrumbs>
  );
};

AppBreadcrumbs.defaultProps = {
  variant: "text",
};

export default AppBreadcrumbs;
