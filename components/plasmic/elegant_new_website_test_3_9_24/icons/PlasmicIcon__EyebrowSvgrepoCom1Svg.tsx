// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type EyebrowSvgrepoCom1SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function EyebrowSvgrepoCom1SvgIcon(
  props: EyebrowSvgrepoCom1SvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 48 48"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M24 40c9.941 0 18-10 18-10s-8.059-10-18-10S6 30 6 30s8.059 10 18 10z"
        }
        fill={"#2F88FF"}
        stroke={"#000"}
        strokeWidth={"4"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M24 34a4 4 0 100-8 4 4 0 000 8z"}
        fill={"#43CCF8"}
        stroke={"#fff"}
        strokeWidth={"4"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M28 6c-7 0-18 3.5-21 6s-1 7 1 6 15.2-5.8 20-7c4.8-1.2 11.667.833 14 2-2.333-2-7-7-14-7z"
        }
        fill={"#2F88FF"}
        stroke={"#000"}
        strokeWidth={"4"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default EyebrowSvgrepoCom1SvgIcon;
/* prettier-ignore-end */
