import React from "react";
import clsx from "clsx";
import Translate, { translate } from "@docusaurus/Translate";
import { PageMetadata } from "@docusaurus/theme-common";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import DocSidebar from "@theme/DocSidebar";
import { ThemeClassNames } from "@docusaurus/theme-common";
import SidebarStyles from "@docusaurus/theme-classic/lib/theme/DocPage/Layout/Sidebar/styles.module.css";
import DocPageStyles from "@docusaurus/theme-classic/lib/theme/DocPage/Layout/styles.module.css";
export default function NotFound() {
  return (
    <>
      <PageMetadata
        title={translate({
          id: "theme.NotFound.title",
          message: "Page Not Found",
        })}
      />
      <Layout>
        <div className={DocPageStyles.docPage}>
          <aside
            className={clsx(
              ThemeClassNames.docs.docSidebarContainer,
              SidebarStyles.docSidebarContainer
            )}
          >
            <DocSidebar
              sidebar={[
                { type: "link", href: "/", label: "Overview" },
                {
                  type: "link",
                  href: "/authentication",
                  label: "Authentication",
                },
                { type: "link", href: "/errors", label: "Errors" },
                { type: "html", value: "<div class='nav_spacer' />" },
                { type: "link", href: "/staking", label: "Staking" },
                { type: "link", href: "/rewards", label: "Rewards" },
                { type: "link", href: "/validators", label: "Validators" },
                { type: "link", href: "/network-data", label: "Network Data" },
                {
                  type: "html",
                  value:
                    "<div class='bottom_nav_spacer'>Questions or Feedback? <a class='email_link' href='mailto:technical-support@figment.io'>Email us</a></div>",
                },
              ]}
              path="/"
            ></DocSidebar>
          </aside>

          <main className="container margin-vert--xl">
            <div className="row">
              <div className="col col--6 col--offset-3">
                <h1 className="hero__title">
                  <Translate
                    id="theme.NotFound.title"
                    description="The title of the 404 page"
                  >
                    Page Not Found
                  </Translate>
                </h1>
                <p>
                  <Translate
                    id="theme.NotFound.p1"
                    description="The first paragraph of the 404 page"
                  >
                    We have recently made changes to the site and the page
                    routes have changed. Please return to the homepage and use
                    the sidebar for navigation.
                  </Translate>
                </p>
                <p>
                  <Translate
                    id="theme.NotFound.p2"
                    description="The 2nd paragraph of the 404 page"
                  >
                    Please contact us if you feel you have reached this page in
                    error.
                  </Translate>
                </p>
                <h3 style={{ textAlign: "center" }}>
                  <Link to="https://docs.figment.io">
                    Click Here to Go Home
                  </Link>
                </h3>
              </div>
            </div>
          </main>
        </div>
      </Layout>
    </>
  );
}
