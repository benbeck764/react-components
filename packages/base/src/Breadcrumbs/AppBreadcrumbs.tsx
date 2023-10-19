"use client";
import { FC } from "react";
import Typography from "@mui/material/Typography";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { StyledBreadcrumbs, StyledLink } from "./AppBreadcrumbs.styles";
import { AppBreadcrumbsProps, BreadcrumbItem } from "./AppBreadcrumbs.props";
import { isString } from "@benbeck764/react-components-common/utilities";

const AppBreadcrumbs: FC<AppBreadcrumbsProps> = (
  props: AppBreadcrumbsProps
) => {
  const { breadcrumbs, sx, allowLinkableFirst, homeSettings, onNavigate } =
    props;

  const replaceParams = (
    path: string,
    params: { [paramName: string]: string }
  ): string => {
    Object.entries(params).forEach(
      ([paramName, paramValue]) => (path = path.replace(paramName, paramValue))
    );
    return path;
  };

  const getQueryParamsString = (
    obj:
      | string
      | Record<string, string>
      | URLSearchParams
      | string[][]
      | undefined
  ): string => {
    const result = new URLSearchParams(obj).toString();
    if (!result) return "";
    return "?" + result;
  };

  const handleLinkClick = (breadcrumb: BreadcrumbItem): void => {
    let path = breadcrumb.path;
    if (breadcrumb.params && Object.keys(breadcrumb.params).length > 0) {
      path = replaceParams(breadcrumb.path, breadcrumb.params);
    }

    if (breadcrumb.queryParams) {
      path += getQueryParamsString(breadcrumb.queryParams);
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
      {homeSettings?.include === true && (
        <>
          {allowLinkableFirst ? (
            <StyledLink
              variant="paragraph"
              onClick={() =>
                handleLinkClick({
                  displayName: homeSettings.displayName ?? "Home",
                  path: homeSettings.path ?? "",
                })
              }
              sx={{
                display: {
                  xs: homeSettings?.mobile ? "inline" : "none",
                  lg: "inline",
                },
              }}
            >
              {homeSettings.displayName ?? "Home"}
            </StyledLink>
          ) : (
            <Typography
              variant="paragraphBold"
              sx={{
                display: {
                  xs: homeSettings?.mobile ? "block" : "none",
                  lg: "block",
                },
              }}
            >
              {homeSettings.displayName ?? "Home"}
            </Typography>
          )}
        </>
      )}

      {breadcrumbs.map((breadcrumb: BreadcrumbItem, index: number) => {
        const isLast = index === breadcrumbs.length - 1;
        const key = isString(breadcrumb.displayName)
          ? (breadcrumb.displayName as string)
          : index;
        return isLast ? (
          <Typography key={key} variant="paragraphBold">
            {breadcrumb.displayName}
          </Typography>
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

export default AppBreadcrumbs;
