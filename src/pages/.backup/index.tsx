import React from "react";
import clsx from "clsx";

import DocSidebar from "@theme/DocSidebar";
import { ThemeClassNames } from "@docusaurus/theme-common";
import MainStyles from "@docusaurus/theme-classic/lib/theme/DocPage/Layout/Main/styles.module.css";
import DocPageStyles from "@docusaurus/theme-classic/lib/theme/DocPage/Layout/styles.module.css";
import SidebarStyles from "@docusaurus/theme-classic/lib/theme/DocPage/Layout/Sidebar/styles.module.css";
import DocItemColStyles from "@docusaurus/theme-classic/lib/theme/DocItem/Layout/styles.module.css";
import DocItemStyles from "@docusaurus/theme-classic/lib/theme/TOC/styles.module.css";
import DocBreadcrumbs from "@docusaurus/theme-classic/lib/theme/DocBreadcrumbs/styles.module.css";
import MDXContent from "@theme/MDXContent";

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import { useHistory } from "@docusaurus/router";

function HomepageHeader() {
  // hack need to fix this proper later
  const history = useHistory();

  const { siteConfig } = useDocusaurusContext();

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <header className={clsx("hero", styles.heroBanner)}>
        <Layout title={`Figment Docs | ${siteConfig.title}`}>
          <div className={DocPageStyles.docPage}>
            <aside
              className={clsx(
                ThemeClassNames.docs.docSidebarContainer,
                SidebarStyles.docSidebarContainer
              )}
            >
              <DocSidebar
                sidebar={[
                  {
                    type: "link",
                    href: "/myCustomPage",
                    label: "My Custom Page",
                  },
                  {
                    type: "link",
                    href: "/anotherCustomPage",
                    label: "Another Custom Page",
                  },
                ]}
                path="/myCustomPage"
              ></DocSidebar>
            </aside>

            <main>
              <p>1</p>
            </main>

            {/* <main className={clsx(MainStyles.docMainContainer)}>
  					<div className={clsx('container', 'padding-top--md', 'padding-bottom--lg')}>
  						<div className="row">
  							<div className={clsx('col', DocItemColStyles.docItemCol)}>
  								<div className={DocItemStyles.docItemContainer}>
  									<article>
  										<div className={clsx(ThemeClassNames.docs.docMarkdown, 'markdown')}>
  											<MDXContent>
  												Our custom text goes here.
  											</MDXContent>
  										</div>
  									</article>
  								</div>
  							</div>
  						</div>
  					</div>
  				</main> */}
          </div>
        </Layout>
      </header>
    </>
  );
  // return (
  //   <>
  //     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  //     <div className="menu">
  //       <p>!</p>
  //     </div>
  //     <header className={clsx("hero", styles.heroBanner)}>
  //       <div className="container">
  //         <h1 className={styles.heroTitle}>
  //           Welcome to the Figment Documentation
  //         </h1>
  //         <p className="hero__subtitle">{siteConfig.tagline}</p>
  //         <div className={styles.quickLinks}>
  //           <div
  //             className={styles.quickLink}
  //             onClick={() => history.push("overview")}
  //           >
  //             <h3>🚀 Overview</h3>
  //             <p>...</p>
  //             <p>Get started &gt;</p>
  //           </div>
  //           <div
  //             className={styles.quickLink}
  //             onClick={() => history.push("api-reference")}
  //           >
  //             <h3>📚 API Reference</h3>
  //             <p>
  //               Explore Figment's powerful APIs for interacting with 20+
  //               networks
  //             </p>
  //             <p>View reference &gt;</p>
  //           </div>
  //           <div
  //             className={styles.quickLink}
  //             onClick={() => history.push("guides")}
  //           >
  //             <h3>📝 Guides</h3>
  //             <p>Learn important concepts with our easy to leverage guides</p>
  //             <p>Get building &gt;</p>
  //           </div>
  //         </div>
  //         <hr className={styles.hr} />
  //         <h2 className={styles.h2}>Explore Products</h2>
  //         <div className={styles.products}>
  //           <div
  //             className={styles.product}
  //             onClick={() => history.push("api-reference/node-api/")}
  //           >
  //             <h3>Nodes</h3>
  //             {/* we should add an image here -- keeping up with our Plaid-theme */}
  //             <p>
  //               Interact with on-chain data and submit transactions across 20+
  //               protocols.
  //             </p>
  //           </div>
  //           <div
  //             className={styles.product}
  //             onClick={() => history.push("api-reference/staking-api/")}
  //           >
  //             <h3>Staking</h3>
  //             {/* we should add an image here -- keeping up with our Plaid-theme */}
  //             <p>
  //               Build staking transactions programmatically with an universal
  //               API that feels the same for all protocols.
  //             </p>
  //           </div>
  //           <div
  //             className={styles.product}
  //             onClick={() => history.push("api-reference/rewards-api/ethereum")}
  //           >
  //             <h3>Rewards</h3>
  //             {/* we should add an image here -- keeping up with our Plaid-theme */}
  //             <p>
  //               Retrieve historical rewards data to integrate directly into your
  //               user dashboards and rewards distribution.
  //             </p>
  //           </div>
  //           <div
  //             className={styles.product}
  //             onClick={() =>
  //               history.push("api-reference/rewards-rates-api/ethereum")
  //             }
  //           >
  //             <h3>Rewards Rates</h3>
  //             {/* we should add an image here -- keeping up with our Plaid-theme */}
  //             <p>
  //               Retrieve time series of daily network-wide annualized staking
  //               rewards rates.
  //             </p>
  //           </div>
  //         </div>
  //       </div>
  //     </header>
  //   </>
  // );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout description="Start building with Figment">
      {/* <HomepageHeader /> */}
      <main></main>
    </Layout>
  );
}
