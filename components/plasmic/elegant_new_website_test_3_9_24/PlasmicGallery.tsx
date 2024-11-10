// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9XM4zeTVVyXosWSTzSvkg2
// Component: DrJSA5OOVl9F

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import FloatingMenu from "../../FloatingMenu"; // plasmic-import: 4mFHf-oFerNL/component
import Header from "../../Header"; // plasmic-import: bBEpEb60SKxb/component
import { SliderWrapper } from "@plasmicpkgs/react-slick";
import { sliderHelpers as SliderWrapper_Helpers } from "@plasmicpkgs/react-slick";
import FollowUs from "../../FollowUs"; // plasmic-import: ewnk8ZUxnW_n/component
import Footer from "../../Footer"; // plasmic-import: g5tc5CVcyBLV/component

import { useScreenVariants as useScreenVariantsczuL3NBhJd9 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: CzuL3-nBhJd9/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 9XM4zeTVVyXosWSTzSvkg2/projectcss
import sty from "./PlasmicGallery.module.css"; // plasmic-import: DrJSA5OOVl9F/css

createPlasmicElementProxy;

export type PlasmicGallery__VariantMembers = {};
export type PlasmicGallery__VariantsArgs = {};
type VariantPropType = keyof PlasmicGallery__VariantsArgs;
export const PlasmicGallery__VariantProps = new Array<VariantPropType>();

export type PlasmicGallery__ArgsType = {};
type ArgPropType = keyof PlasmicGallery__ArgsType;
export const PlasmicGallery__ArgProps = new Array<ArgPropType>();

export type PlasmicGallery__OverridesType = {
  gallery?: Flex__<"div">;
  floatingMenu?: Flex__<typeof FloatingMenu>;
  header?: Flex__<typeof Header>;
  hero?: Flex__<"section">;
  mobileHero?: Flex__<"section">;
  section?: Flex__<"section">;
  sliderCarousel?: Flex__<typeof SliderWrapper>;
  followUs?: Flex__<typeof FollowUs>;
  footer?: Flex__<typeof Footer>;
};

export interface DefaultGalleryProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicGallery__RenderFunc(props: {
  variants: PlasmicGallery__VariantsArgs;
  args: PlasmicGallery__ArgsType;
  overrides: PlasmicGallery__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "sliderCarousel.currentSlide",
        type: "private",
        variableType: "number",
        initFunc: ({ $props, $state, $queries, $ctx }) => 0,

        refName: "sliderCarousel",
        onMutate: generateOnMutateForSpec("currentSlide", SliderWrapper_Helpers)
      },
      {
        path: "floatingMenu.plasmicAntd5SingleCollapseOpen",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsczuL3NBhJd9()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <title key="title">{PlasmicGallery.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicGallery.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicGallery.pageMetadata.title}
        />
        <meta
          key="description"
          name="description"
          content={PlasmicGallery.pageMetadata.description}
        />
        <meta
          key="og:description"
          property="og:description"
          content={PlasmicGallery.pageMetadata.description}
        />
        <meta
          key="twitter:description"
          name="twitter:description"
          content={PlasmicGallery.pageMetadata.description}
        />
        <meta
          key="og:image"
          property="og:image"
          content={PlasmicGallery.pageMetadata.ogImageSrc}
        />
        <meta
          key="twitter:image"
          name="twitter:image"
          content={PlasmicGallery.pageMetadata.ogImageSrc}
        />
        <link rel="canonical" href={PlasmicGallery.pageMetadata.canonical} />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"gallery"}
          data-plasmic-override={overrides.gallery}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            sty.gallery
          )}
        >
          <FloatingMenu
            data-plasmic-name={"floatingMenu"}
            data-plasmic-override={overrides.floatingMenu}
            className={classNames("__wab_instance", sty.floatingMenu)}
            onPlasmicAntd5SingleCollapseOpenChange={generateStateOnChangeProp(
              $state,
              ["floatingMenu", "plasmicAntd5SingleCollapseOpen"]
            )}
          />

          <Header
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames("__wab_instance", sty.header)}
          />

          <section
            data-plasmic-name={"hero"}
            data-plasmic-override={overrides.hero}
            className={classNames(projectcss.all, sty.hero)}
          >
            <div className={classNames(projectcss.all, sty.freeBox__qmJpo)}>
              <div className={classNames(projectcss.all, sty.freeBox__uXswi)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__rIvPr
                  )}
                >
                  <React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ color: "#F2F2F2" }}
                    >
                      {"Gallery"}
                    </span>
                  </React.Fragment>
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__jAFe
                  )}
                >
                  {"See the magic of Elegant Ink before and after photos"}
                </div>
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__gDwTr)} />
            </div>
          </section>
          <section
            data-plasmic-name={"mobileHero"}
            data-plasmic-override={overrides.mobileHero}
            className={classNames(projectcss.all, sty.mobileHero)}
          >
            <div className={classNames(projectcss.all, sty.freeBox__nAzHj)}>
              <div className={classNames(projectcss.all, sty.freeBox__dVJaU)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__x36XU
                  )}
                >
                  <React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ color: "#F2F2F2" }}
                    >
                      {"Gallery"}
                    </span>
                  </React.Fragment>
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__m9H2
                  )}
                >
                  {"See the magic of Elegant Ink before and after photos"}
                </div>
              </div>
            </div>
          </section>
          <section
            data-plasmic-name={"section"}
            data-plasmic-override={overrides.section}
            className={classNames(projectcss.all, sty.section)}
            loading={"Lazy"}
          >
            {(() => {
              const child$Props = {
                adaptiveHeight: true,
                arrows: true,
                autoplay: true,
                autoplaySpeed: 3000,
                beforeChange: generateStateOnChangePropForCodeComponents(
                  $state,
                  "currentSlide",
                  ["sliderCarousel", "currentSlide"],
                  SliderWrapper_Helpers
                ),
                centerMode: true,
                className: classNames("__wab_instance", sty.sliderCarousel),
                cssEase: "linear",
                dots: false,
                initialSlide: generateStateValueProp($state, [
                  "sliderCarousel",
                  "currentSlide"
                ]),
                ref: ref => {
                  $refs["sliderCarousel"] = ref;
                },
                sliderScopeClassName: sty["sliderCarousel__slider"],
                speed: 1000
              };
              initializeCodeComponentStates(
                $state,
                [
                  {
                    name: "currentSlide",
                    plasmicStateName: "sliderCarousel.currentSlide"
                  }
                ],
                [],
                SliderWrapper_Helpers ?? {},
                child$Props
              );

              return (
                <SliderWrapper
                  data-plasmic-name={"sliderCarousel"}
                  data-plasmic-override={overrides.sliderCarousel}
                  {...child$Props}
                >
                  <div
                    className={classNames(projectcss.all, sty.freeBox__acwZt)}
                  >
                    <PlasmicImg__
                      alt={""}
                      className={classNames(sty.img__m3P5)}
                      displayHeight={"auto"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"auto"}
                      src={{
                        src: "/plasmic/elegant_new_website_test_3_9_24/images/pxl20240703013004606Jpg.jpg",
                        fullWidth: 4080,
                        fullHeight: 3072,
                        aspectRatio: undefined
                      }}
                    />
                  </div>
                  <div
                    className={classNames(projectcss.all, sty.freeBox___71ClJ)}
                  >
                    <PlasmicImg__
                      alt={""}
                      className={classNames(sty.img__rpAsg)}
                      displayHeight={"auto"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"auto"}
                      src={{
                        src: "/plasmic/elegant_new_website_test_3_9_24/images/pxl20240703015220997Jpg2.jpg",
                        fullWidth: 2734,
                        fullHeight: 2051,
                        aspectRatio: undefined
                      }}
                    />
                  </div>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__syyd9)}
                  >
                    <PlasmicImg__
                      alt={""}
                      className={classNames(sty.img___6YuBg)}
                      displayHeight={"auto"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"auto"}
                      src={{
                        src: "/plasmic/elegant_new_website_test_3_9_24/images/pxl20240703024048043Jpg.jpg",
                        fullWidth: 3071,
                        fullHeight: 2313,
                        aspectRatio: undefined
                      }}
                    />
                  </div>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__iURo5)}
                  >
                    <PlasmicImg__
                      alt={""}
                      className={classNames(sty.img__tKchR)}
                      displayHeight={"auto"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"auto"}
                      src={{
                        src: "/plasmic/elegant_new_website_test_3_9_24/images/pxl20240703043554627Jpg.jpg",
                        fullWidth: 3003,
                        fullHeight: 2261,
                        aspectRatio: undefined
                      }}
                    />
                  </div>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__nu9W5)}
                  >
                    <PlasmicImg__
                      alt={""}
                      className={classNames(sty.img__zEuy)}
                      displayHeight={"auto"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"auto"}
                      src={{
                        src: "/plasmic/elegant_new_website_test_3_9_24/images/pxl20240703043555514Jpg.jpg",
                        fullWidth: 3114,
                        fullHeight: 2345,
                        aspectRatio: undefined
                      }}
                    />
                  </div>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__pHbv)}
                  >
                    <PlasmicImg__
                      alt={""}
                      className={classNames(sty.img__dv0Y5)}
                      displayHeight={"auto"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"auto"}
                      src={{
                        src: "/plasmic/elegant_new_website_test_3_9_24/images/pxl20240703051855930Jpg.jpg",
                        fullWidth: 2331,
                        fullHeight: 1754,
                        aspectRatio: undefined
                      }}
                    />
                  </div>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__sUZzv)}
                  >
                    <PlasmicImg__
                      alt={""}
                      className={classNames(sty.img__wECb3)}
                      displayHeight={"auto"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"auto"}
                      src={{
                        src: "/plasmic/elegant_new_website_test_3_9_24/images/pxl20240703051855930AfterJpg.jpg",
                        fullWidth: 1651,
                        fullHeight: 1243,
                        aspectRatio: undefined
                      }}
                    />
                  </div>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__pzUKv)}
                  >
                    <PlasmicImg__
                      alt={""}
                      className={classNames(sty.img__nDdZa)}
                      displayHeight={"auto"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"auto"}
                      src={{
                        src: "/plasmic/elegant_new_website_test_3_9_24/images/pxl20240704010940289MpJpg.jpg",
                        fullWidth: 2816,
                        fullHeight: 2120,
                        aspectRatio: undefined
                      }}
                    />
                  </div>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__c8Rwf)}
                  >
                    <PlasmicImg__
                      alt={""}
                      className={classNames(sty.img__vxC4I)}
                      displayHeight={"auto"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"auto"}
                      src={{
                        src: "/plasmic/elegant_new_website_test_3_9_24/images/pxl20240704024945534Jpg.jpg",
                        fullWidth: 3072,
                        fullHeight: 2313,
                        aspectRatio: undefined
                      }}
                    />
                  </div>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__oHc4O)}
                  >
                    <PlasmicImg__
                      alt={""}
                      className={classNames(sty.img___4XiIh)}
                      displayHeight={"auto"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"auto"}
                      src={{
                        src: "/plasmic/elegant_new_website_test_3_9_24/images/pxl20240704034924018Jpg.jpg",
                        fullWidth: 3072,
                        fullHeight: 2313,
                        aspectRatio: undefined
                      }}
                    />
                  </div>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__ocjSm)}
                  >
                    <PlasmicImg__
                      alt={""}
                      className={classNames(sty.img__lH2Hy)}
                      displayHeight={"auto"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"auto"}
                      src={{
                        src: "/plasmic/elegant_new_website_test_3_9_24/images/pxl20240704043313977Jpg.jpg",
                        fullWidth: 1727,
                        fullHeight: 1301,
                        aspectRatio: undefined
                      }}
                    />
                  </div>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__gt8Rk)}
                  >
                    <PlasmicImg__
                      alt={""}
                      className={classNames(sty.img__jVkLe)}
                      displayHeight={"auto"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"auto"}
                      src={{
                        src: "/plasmic/elegant_new_website_test_3_9_24/images/pxl20240704055329928Jpg.jpg",
                        fullWidth: 3371,
                        fullHeight: 2539,
                        aspectRatio: undefined
                      }}
                    />
                  </div>
                  <div
                    className={classNames(projectcss.all, sty.freeBox___4PeC)}
                  >
                    <PlasmicImg__
                      alt={""}
                      className={classNames(sty.img___8MXl)}
                      displayHeight={"auto"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"auto"}
                      src={{
                        src: "/plasmic/elegant_new_website_test_3_9_24/images/pxl20240708020308290Jpg.jpg",
                        fullWidth: 3579,
                        fullHeight: 2695,
                        aspectRatio: undefined
                      }}
                    />
                  </div>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__h05OQ)}
                  >
                    <PlasmicImg__
                      alt={""}
                      className={classNames(sty.img__srPyT)}
                      displayHeight={"auto"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"auto"}
                      src={{
                        src: "/plasmic/elegant_new_website_test_3_9_24/images/pxl20240708055033810Jpg.jpg",
                        fullWidth: 2739,
                        fullHeight: 2062,
                        aspectRatio: undefined
                      }}
                    />
                  </div>
                </SliderWrapper>
              );
            })()}
          </section>
          <FollowUs
            data-plasmic-name={"followUs"}
            data-plasmic-override={overrides.followUs}
            className={classNames("__wab_instance", sty.followUs)}
          />

          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  gallery: [
    "gallery",
    "floatingMenu",
    "header",
    "hero",
    "mobileHero",
    "section",
    "sliderCarousel",
    "followUs",
    "footer"
  ],
  floatingMenu: ["floatingMenu"],
  header: ["header"],
  hero: ["hero"],
  mobileHero: ["mobileHero"],
  section: ["section", "sliderCarousel"],
  sliderCarousel: ["sliderCarousel"],
  followUs: ["followUs"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  gallery: "div";
  floatingMenu: typeof FloatingMenu;
  header: typeof Header;
  hero: "section";
  mobileHero: "section";
  section: "section";
  sliderCarousel: typeof SliderWrapper;
  followUs: typeof FollowUs;
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicGallery__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicGallery__VariantsArgs;
    args?: PlasmicGallery__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicGallery__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicGallery__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicGallery__ArgProps,
          internalVariantPropNames: PlasmicGallery__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicGallery__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "gallery") {
    func.displayName = "PlasmicGallery";
  } else {
    func.displayName = `PlasmicGallery.${nodeName}`;
  }
  return func;
}

export const PlasmicGallery = Object.assign(
  // Top-level PlasmicGallery renders the root element
  makeNodeComponent("gallery"),
  {
    // Helper components rendering sub-elements
    floatingMenu: makeNodeComponent("floatingMenu"),
    header: makeNodeComponent("header"),
    hero: makeNodeComponent("hero"),
    mobileHero: makeNodeComponent("mobileHero"),
    section: makeNodeComponent("section"),
    sliderCarousel: makeNodeComponent("sliderCarousel"),
    followUs: makeNodeComponent("followUs"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicGallery
    internalVariantProps: PlasmicGallery__VariantProps,
    internalArgProps: PlasmicGallery__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Elegant Ink - Gallery",
      description:
        "At Elegant Ink, we are dedicated to providing high-quality permanent makeup services that enhance your natural beauty and boost your confidence.",
      ogImageSrc:
        "https://site-assets.plasmic.app/f5460de3c47373fc7c1b77c39e4e4905.png",
      canonical: "https://elegantink.au/"
    }
  }
);

export default PlasmicGallery;
/* prettier-ignore-end */
