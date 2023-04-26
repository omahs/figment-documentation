// @ts-nocheck
const lightCodeTheme = require("prism-react-renderer/themes/dracula");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const githubConfig =
  process.env.NODE_ENV === "development"
    ? {
        baseUrl: "/",
      }
    : {
        baseUrl: "/",
        organizationName: "figment-networks", // Usually your GitHub org/user name.
        projectName: "figment-documentation", // Usually your repo name.
        deploymentBranch: "gh-pages",
      };

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Figment Docs",
  tagline: "Everything you need to start building with Figment.",
  url: "https://docs.figment.io",
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "ignore",
  favicon: "img/favicon.ico",

  ...githubConfig,

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [require.resolve("docusaurus-plugin-image-zoom")],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          breadcrumbs: false,
          routeBasePath: "/", // Serve the docs at the site's root
          remarkPlugins: [
            [require("@docusaurus/remark-plugin-npm2yarn"), { sync: true }],
          ],
          sidebarPath: require.resolve("./sidebars.js"),
          async sidebarItemsGenerator({
            defaultSidebarItemsGenerator,
            ...args
          }) {
            const sidebarItems = await defaultSidebarItemsGenerator(args).map(
              (link) => {
                if (link.id === "Figment Docs") {
                  return {
                    label: "Overview",
                    ...link,
                  };
                }

                /* Redirects for outdated links */
                if (link.label === "Quickstart") {
                  return {
                    className: "hidden",
                  };
                }

                if (link.label === "Support") {
                  return {
                    className: "hidden",
                  };
                }

                if (link.label === "Guides") {
                  return {
                    className: "hidden",
                  };
                }

                if (link.label === "API Reference") {
                  return {
                    className: "hidden",
                  };
                }
                /* End redirects for outdated links */

                if (link.label === "TopLogo") {
                  return {
                    type: "html",
                    value:
                      "<div class='figmentLogoNotTopNavBar'><!--TODO: Add SVG logo and colorModeToggle here --></div>",
                    defaultStyle: true,
                  };
                }

                // TODO: Add a spacer without using an empty directory & index file
                if (link.label === "TopSpacer") {
                  return {
                    type: "html",
                    value: "<div class='nav_spacer' />",
                    defaultStyle: true,
                  };
                }

                if (link.label === "BottomSpacer") {
                  return {
                    type: "html",
                    value:
                      "<div class='bottom_nav_spacer'>Questions or Feedback? <a class='email_link' href='mailto:technical-support@figment.io'>Email us</a></div>",
                    defaultStyle: true,
                  };
                }

                if (link.label !== "API Reference") {
                  return link;
                }

                return {
                  ...link,
                  collapsed: true,
                  items: link.items.map((service) => {
                    return {
                      ...service,
                      collapsed: true,
                      collapsible: false,
                      link: service.items[0],
                      items: service.items.map((network) => ({
                        ...network,
                        className: "hidden",
                      })),
                    };
                  }),
                };
              }
            );

            return sidebarItems;
          },
        },
        theme: {
          customCss: [
            require.resolve("./src/css/font-imports.css"),
            require.resolve("./src/css/base-styles.css"),
            require.resolve("./src/css/api-reference.css"),
            require.resolve("./src/css/top-nav.css"),
            require.resolve("./src/css/table-of-contents.css"),
            require.resolve("./src/css/side-nav.css"),
          ],
        },
      }),
    ],
  ],

  /* TODO: Swap logo in navbar */
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // announcementBar: {
      //   id: "changelog",
      //   content:
      //     'We have recently updated our docs, please check out the <a target="_blank" rel="noopener noreferrer" href="/changelog">changelog</a> to see what&apos;s new',
      //   backgroundColor: "white",
      //   textColor: "#091E42",
      //   isCloseable: true,
      // },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: "Figment API",
        hideOnScroll: false,
        style: "primary",
        logo: {
          alt: "Figment Logo",
          src: "img/logo.svg",
          srcDark: "img/logo.svg",
          href: "https://docs.figment.io/",
          target: "_self",
          width: 32,
          height: 32,
          className: "custom-navbar-logo-class",
        },
      },
      zoom: {
        selector: ".inline-image",
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
          background: {
            light: "rgb(255, 255, 255)",
            dark: "rgb(50, 50, 50)",
          },
        },
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["ruby"],
      },
      autoCollapseSidebar: true,
    }),
};

module.exports = config;
