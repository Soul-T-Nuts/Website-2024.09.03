import * as React from "react";
import {
  PlasmicButtonDark,
  DefaultButtonDarkProps
} from "./plasmic/elegant_new_website_test_3_9_24/PlasmicButtonDark";

import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

export interface ButtonDarkProps extends DefaultButtonDarkProps {
  // Feel free to add any additional props that this component should receive
}
function ButtonDark_(props: ButtonDarkProps, ref: ButtonRef) {
  const { plasmicProps } = PlasmicButtonDark.useBehavior<ButtonDarkProps>(
    props,
    ref
  );
  return <PlasmicButtonDark {...plasmicProps} />;
}

export type ButtonComponentType = {
  (
    props: Omit<ButtonDarkProps, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<ButtonDarkProps, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};
const ButtonDark = React.forwardRef(ButtonDark_) as any as ButtonComponentType;

export default Object.assign(ButtonDark, { __plumeType: "button" });
