// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _153609SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _153609SvgIcon(props: _153609SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M3 11c0-3.771 0-5.657 1.172-6.828C5.343 3 7.229 3 11 3h2c3.771 0 5.657 0 6.828 1.172C21 5.343 21 7.229 21 11v2c0 3.771 0 5.657-1.172 6.828C18.657 21 16.771 21 13 21h-2c-3.771 0-5.657 0-6.828-1.172C3 18.657 3 16.771 3 13v-2z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
      ></path>

      <circle cx={"16.5"} cy={"7.5"} r={"1.5"} fill={"currentColor"}></circle>

      <circle
        cx={"12"}
        cy={"12"}
        r={"3"}
        stroke={"currentColor"}
        strokeWidth={"2"}
      ></circle>
    </svg>
  );
}

export default _153609SvgIcon;
/* prettier-ignore-end */
