// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type EyebrowSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function EyebrowSvgrepoComSvgIcon(props: EyebrowSvgrepoComSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      version={"1.1"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g fillRule={"nonzero"} stroke={"none"} strokeWidth={"1"} fill={"none"}>
        <path
          d={
            "M24 0v24H0V0h24zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018zm.265-.113l-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022zm-.715.002a.023.023 0 00-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092z"
          }
        ></path>

        <path
          d={
            "M18.937 9.362c1.703.768 3.171 1.921 3.963 3.554a1 1 0 01-1.128 1.41C15.815 12.93 9.789 15.33 6.612 16.64c-1.994.822-3.93.151-4.931-1.201a3.364 3.364 0 01-.657-2.41c.34-2.805 3.866-4.005 6.192-4.533 3.781-.857 8.148-.748 11.721.865z"
          }
          fill={"currentColor"}
        ></path>
      </g>
    </svg>
  );
}

export default EyebrowSvgrepoComSvgIcon;
/* prettier-ignore-end */
