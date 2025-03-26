// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9XM4zeTVVyXosWSTzSvkg2
// Component: 64vYeBp6_ssu

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
import Button from "../../Button"; // plasmic-import: KQqibFRoHOLm/component
import { Reveal } from "@plasmicpkgs/react-awesome-reveal";
import Service from "../../Service"; // plasmic-import: r0i5iKZJoiOv/component
import FollowUs from "../../FollowUs"; // plasmic-import: ewnk8ZUxnW_n/component
import Footer from "../../Footer"; // plasmic-import: g5tc5CVcyBLV/component

import { useScreenVariants as useScreenVariantsczuL3NBhJd9 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: CzuL3-nBhJd9/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 9XM4zeTVVyXosWSTzSvkg2/projectcss
import sty from "./PlasmicServices.module.css"; // plasmic-import: 64vYeBp6_ssu/css

import LipsOfFemaleSexyMouthSvgrepoComSvgIcon from "./icons/PlasmicIcon__LipsOfFemaleSexyMouthSvgrepoComSvg"; // plasmic-import: 4wan28XXn4vG/icon
import EyebrowSvgrepoComSvgIcon from "./icons/PlasmicIcon__EyebrowSvgrepoComSvg"; // plasmic-import: gTtU8L3eEdOF/icon

createPlasmicElementProxy;

export type PlasmicServices__VariantMembers = {};
export type PlasmicServices__VariantsArgs = {};
type VariantPropType = keyof PlasmicServices__VariantsArgs;
export const PlasmicServices__VariantProps = new Array<VariantPropType>();

export type PlasmicServices__ArgsType = {};
type ArgPropType = keyof PlasmicServices__ArgsType;
export const PlasmicServices__ArgProps = new Array<ArgPropType>();

export type PlasmicServices__OverridesType = {
  services?: Flex__<"div">;
  floatingMenu?: Flex__<typeof FloatingMenu>;
  header?: Flex__<typeof Header>;
  hero?: Flex__<"section">;
  bookButton?: Flex__<typeof Button>;
  mobileHero?: Flex__<"section">;
  bookButton2?: Flex__<typeof Button>;
  lips?: Flex__<"section">;
  brows?: Flex__<"section">;
  bookButton3?: Flex__<typeof Button>;
  followUs?: Flex__<typeof FollowUs>;
  footer?: Flex__<typeof Footer>;
};

export interface DefaultServicesProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicServices__RenderFunc(props: {
  variants: PlasmicServices__VariantsArgs;
  args: PlasmicServices__ArgsType;
  overrides: PlasmicServices__OverridesType;
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
        <title key="title">{PlasmicServices.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicServices.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicServices.pageMetadata.title}
        />
        <meta
          key="description"
          name="description"
          content={PlasmicServices.pageMetadata.description}
        />
        <meta
          key="og:description"
          property="og:description"
          content={PlasmicServices.pageMetadata.description}
        />
        <meta
          key="twitter:description"
          name="twitter:description"
          content={PlasmicServices.pageMetadata.description}
        />
        <meta
          key="og:image"
          property="og:image"
          content={PlasmicServices.pageMetadata.ogImageSrc}
        />
        <meta
          key="twitter:image"
          name="twitter:image"
          content={PlasmicServices.pageMetadata.ogImageSrc}
        />
        <link rel="canonical" href={PlasmicServices.pageMetadata.canonical} />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"services"}
          data-plasmic-override={overrides.services}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            sty.services
          )}
        >
          <FloatingMenu
            data-plasmic-name={"floatingMenu"}
            data-plasmic-override={overrides.floatingMenu}
            className={classNames("__wab_instance", sty.floatingMenu)}
            onPlasmicAntd5SingleCollapseOpenChange={async (
              ...eventArgs: any
            ) => {
              generateStateOnChangeProp($state, [
                "floatingMenu",
                "plasmicAntd5SingleCollapseOpen"
              ]).apply(null, eventArgs);

              if (
                eventArgs.length > 1 &&
                eventArgs[1] &&
                eventArgs[1]._plasmic_state_init_
              ) {
                return;
              }
            }}
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
            <div className={classNames(projectcss.all, sty.freeBox___7NnEo)}>
              <div className={classNames(projectcss.all, sty.freeBox__vsbM)}>
                <h1
                  className={classNames(
                    projectcss.all,
                    projectcss.h1,
                    projectcss.__wab_text,
                    sty.h1__vgaqk
                  )}
                >
                  <React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ color: "#F2F2F2" }}
                    >
                      {"Services"}
                    </span>
                  </React.Fragment>
                </h1>
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__o6VId
                  )}
                  component={Link}
                  href={
                    "https://book.squareup.com/appointments/r9klmrgg5nbbgr/location/LF79VDDS92H58/services"
                  }
                  platform={"nextjs"}
                  target={"_blank"}
                  title={"Book now"}
                >
                  <Button
                    data-plasmic-name={"bookButton"}
                    data-plasmic-override={overrides.bookButton}
                    className={classNames("__wab_instance", sty.bookButton)}
                    target={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__q77Wr
                      )}
                    >
                      {"Book now"}
                    </div>
                  </Button>
                </PlasmicLink__>
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__pYq0)} />
            </div>
          </section>
          <section
            data-plasmic-name={"mobileHero"}
            data-plasmic-override={overrides.mobileHero}
            className={classNames(projectcss.all, sty.mobileHero)}
          >
            <div className={classNames(projectcss.all, sty.freeBox__uQDi)}>
              <div className={classNames(projectcss.all, sty.freeBox__nIb)}>
                <h1
                  className={classNames(
                    projectcss.all,
                    projectcss.h1,
                    projectcss.__wab_text,
                    sty.h1__tIRnJ
                  )}
                >
                  <React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ color: "#F2F2F2" }}
                    >
                      {"Services"}
                    </span>
                  </React.Fragment>
                </h1>
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__ynY6
                  )}
                  component={Link}
                  href={
                    "https://book.squareup.com/appointments/r9klmrgg5nbbgr/location/LF79VDDS92H58/services"
                  }
                  platform={"nextjs"}
                  target={"_blank"}
                >
                  <Button
                    data-plasmic-name={"bookButton2"}
                    data-plasmic-override={overrides.bookButton2}
                    className={classNames("__wab_instance", sty.bookButton2)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__jFgWk
                      )}
                    >
                      {"Book now"}
                    </div>
                  </Button>
                </PlasmicLink__>
              </div>
            </div>
          </section>
          <section
            data-plasmic-name={"lips"}
            data-plasmic-override={overrides.lips}
            className={classNames(projectcss.all, sty.lips)}
          >
            <Reveal
              className={classNames("__wab_instance", sty.reveal___8PtDg)}
              duration={1500}
              triggerOnce={true}
            >
              <div className={classNames(projectcss.all, sty.freeBox__nfDsu)}>
                <h2
                  className={classNames(
                    projectcss.all,
                    projectcss.h2,
                    projectcss.__wab_text,
                    sty.h2__wJ08N
                  )}
                >
                  {"Lips"}
                </h2>
                <LipsOfFemaleSexyMouthSvgrepoComSvgIcon
                  className={classNames(projectcss.all, sty.svg__xglfq)}
                  role={"img"}
                />
              </div>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.columns___1KUpY)}
              >
                <div className={classNames(projectcss.all, sty.column__vUakM)}>
                  <Service
                    className={classNames("__wab_instance", sty.service__hToQs)}
                    slot={"$270 | 3 hrs"}
                    slot2={
                      "Enhance your brows with our Ombre Microshading service. Our skilled makeup artists will create a natural, gradient effect for a flawless and long-lasting look."
                    }
                  >
                    {"Ombre microshading"}
                  </Service>
                </div>
                <div className={classNames(projectcss.all, sty.column__w5Ydz)}>
                  <Service
                    className={classNames("__wab_instance", sty.service__tZv2M)}
                    slot={"$260 | 3 hrs"}
                    slot2={
                      "Achieve natural-looking, flawless eyebrows with our Nano Machine Hairstrokes. Precision technology creates hair-like strokes for perfect, long-lasting results in permanent makeup."
                    }
                  >
                    {"Nano machine strokes"}
                  </Service>
                </div>
                <div className={classNames(projectcss.all, sty.column___120Va)}>
                  <Service
                    className={classNames(
                      "__wab_instance",
                      sty.service___32E1C
                    )}
                    slot={"$320 | 3 hrs"}
                    slot2={
                      "Experience the perfect blend of ombre shading and natural-looking nano strokes with our Combination Ombre and Nano Strokes service. Achieve flawless brows at our professional permanent makeup studio."
                    }
                  >
                    {"Combination brows"}
                  </Service>
                </div>
                <div className={classNames(projectcss.all, sty.column__km2L)}>
                  <Service
                    className={classNames("__wab_instance", sty.service__akeUh)}
                    slot={"$120 | 2 hrs"}
                    slot2={
                      "Our 6-12 week touch up service ensures your makeup remains flawless and fresh for weeks on end. Trust our professional makeup artists to enhance your beauty effortlessly."
                    }
                  >
                    {"6-12 week touch up"}
                  </Service>
                </div>
                <div className={classNames(projectcss.all, sty.column__tnkC)}>
                  <Service
                    className={classNames(
                      "__wab_instance",
                      sty.service___1XUqE
                    )}
                    slot={"$170 | 2 hrs"}
                    slot2={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__mcs3O
                        )}
                      >
                        {
                          "Enhance your natural beauty with our Yearly Colour Boost service. Our team of professional makeup artists will refresh your look and keep you glowing all year round."
                        }
                      </div>
                    }
                  >
                    {"Yearly colour boost"}
                  </Service>
                </div>
              </Stack__>
            </Reveal>
          </section>
          <section
            data-plasmic-name={"brows"}
            data-plasmic-override={overrides.brows}
            className={classNames(projectcss.all, sty.brows)}
          >
            <Reveal
              className={classNames("__wab_instance", sty.reveal__s6J67)}
              duration={1500}
              triggerOnce={true}
            >
              <div className={classNames(projectcss.all, sty.freeBox__tkwh3)}>
                <h2
                  className={classNames(
                    projectcss.all,
                    projectcss.h2,
                    projectcss.__wab_text,
                    sty.h2__mKhsD
                  )}
                >
                  {"Brows"}
                </h2>
                <EyebrowSvgrepoComSvgIcon
                  className={classNames(projectcss.all, sty.svg__ayQer)}
                  role={"img"}
                />
              </div>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.columns__kSu5R)}
              >
                <div className={classNames(projectcss.all, sty.column__kdBig)}>
                  <Service
                    className={classNames(
                      "__wab_instance",
                      sty.service___8HCy4
                    )}
                    slot={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__eGqjb
                        )}
                      >
                        {"$270 | 2 hrs 30 min"}
                      </div>
                    }
                    slot2={
                      "Enhance your natural lip colour with our professional lip blush service. Our expert makeup artists will create a subtle yet defined look tailored to your individual style."
                    }
                  >
                    {"Lip blush"}
                  </Service>
                </div>
                <div className={classNames(projectcss.all, sty.column__ck1F)}>
                  <Service
                    className={classNames("__wab_instance", sty.service__lsdTh)}
                    slot={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__lTdE9
                        )}
                      >
                        {"$300 | 2 hrs 30 min"}
                      </div>
                    }
                    slot2={
                      "Our colour correction service is an additional item for Lip blush at our professional makeup studio which ensures flawless and natural-looking results for a perfect pout."
                    }
                  >
                    {"Lip blush with colour correction"}
                  </Service>
                </div>
                <div className={classNames(projectcss.all, sty.column__o3Uww)}>
                  <Service
                    className={classNames("__wab_instance", sty.service__uQ1Uw)}
                    slot={"$120 | 2 hrs"}
                    slot2={
                      "Our 6-12 week touch up service ensures your makeup remains flawless and fresh for weeks on end. Trust our professional makeup artists to enhance your beauty effortlessly."
                    }
                  >
                    {"6-12 week touch up"}
                  </Service>
                </div>
                <div className={classNames(projectcss.all, sty.column__ofXrg)}>
                  <Service
                    className={classNames("__wab_instance", sty.service__dDy7V)}
                    slot={"$170 | 2 hrs"}
                    slot2={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text___8FdQd
                        )}
                      >
                        {
                          "Enhance your natural beauty with our Yearly Colour Boost service. Our team of professional makeup artists will refresh your look and keep you glowing all year round."
                        }
                      </div>
                    }
                  >
                    {"Yearly colour boost"}
                  </Service>
                </div>
              </Stack__>
            </Reveal>
          </section>
          <PlasmicLink__
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link___3Gr3Z
            )}
            component={Link}
            href={
              "https://book.squareup.com/appointments/r9klmrgg5nbbgr/location/LF79VDDS92H58/services"
            }
            platform={"nextjs"}
            target={"_blank"}
            title={"Book now"}
          >
            <Button
              data-plasmic-name={"bookButton3"}
              data-plasmic-override={overrides.bookButton3}
              className={classNames("__wab_instance", sty.bookButton3)}
              target={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___5PKjV
                )}
              >
                {"Book now"}
              </div>
            </Button>
          </PlasmicLink__>
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
  services: [
    "services",
    "floatingMenu",
    "header",
    "hero",
    "bookButton",
    "mobileHero",
    "bookButton2",
    "lips",
    "brows",
    "bookButton3",
    "followUs",
    "footer"
  ],
  floatingMenu: ["floatingMenu"],
  header: ["header"],
  hero: ["hero", "bookButton"],
  bookButton: ["bookButton"],
  mobileHero: ["mobileHero", "bookButton2"],
  bookButton2: ["bookButton2"],
  lips: ["lips"],
  brows: ["brows"],
  bookButton3: ["bookButton3"],
  followUs: ["followUs"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  services: "div";
  floatingMenu: typeof FloatingMenu;
  header: typeof Header;
  hero: "section";
  bookButton: typeof Button;
  mobileHero: "section";
  bookButton2: typeof Button;
  lips: "section";
  brows: "section";
  bookButton3: typeof Button;
  followUs: typeof FollowUs;
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicServices__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicServices__VariantsArgs;
    args?: PlasmicServices__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicServices__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicServices__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
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
          internalArgPropNames: PlasmicServices__ArgProps,
          internalVariantPropNames: PlasmicServices__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicServices__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "services") {
    func.displayName = "PlasmicServices";
  } else {
    func.displayName = `PlasmicServices.${nodeName}`;
  }
  return func;
}

export const PlasmicServices = Object.assign(
  // Top-level PlasmicServices renders the root element
  makeNodeComponent("services"),
  {
    // Helper components rendering sub-elements
    floatingMenu: makeNodeComponent("floatingMenu"),
    header: makeNodeComponent("header"),
    hero: makeNodeComponent("hero"),
    bookButton: makeNodeComponent("bookButton"),
    mobileHero: makeNodeComponent("mobileHero"),
    bookButton2: makeNodeComponent("bookButton2"),
    lips: makeNodeComponent("lips"),
    brows: makeNodeComponent("brows"),
    bookButton3: makeNodeComponent("bookButton3"),
    followUs: makeNodeComponent("followUs"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicServices
    internalVariantProps: PlasmicServices__VariantProps,
    internalArgProps: PlasmicServices__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Elegant Ink - Services",
      description:
        "At Elegant Ink, we are dedicated to providing high-quality permanent makeup services that enhance your natural beauty and boost your confidence.",
      ogImageSrc:
        "https://site-assets.plasmic.app/f5460de3c47373fc7c1b77c39e4e4905.png",
      canonical: "https://elegantink.au/"
    }
  }
);

export default PlasmicServices;
/* prettier-ignore-end */
