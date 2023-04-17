import React from "react";
import Link from "@docusaurus/Link";

export default function APIReferenceNav({
  service,
  network,
  methods,
  networks,
}) {
  return (
    <>
      {methods && (
        <>
          {methods.length < 10 && (
            <>
              <div className="row" style={{ marginLeft: "-29px" }}>
                <div className="col">
                  {methods.map((m, i) => (
                    <>
                      <h3>{m.folder}</h3>
                      <ul>
                        <li
                          key={m.folder + Math.random}
                          className="requestList"
                        >
                          <Link
                            key={`${m?.name}-${m?.method}--m-hash`}
                            href={`#${m?.name.toLowerCase()}`}
                          >
                            {m?.name}
                          </Link>
                        </li>
                      </ul>
                    </>
                  ))}
                </div>
              </div>
            </>
          )}

          {methods.length > 10 && methods.length < 30 && (
            <div className="row" style={{ marginLeft: "-48px" }}>
              <div className="col">
                {/* {methods[0].name === 'POST /api/v1/blockfrost_projects' && (<>
          <h4 style={{marginLeft: '2rem'}}>Blockfrost Projects</h4>
          </>)} */}

                {methods.slice(0, 10).map((m, i) => (
                  <>
                    <ul>
                      <h3>{m.folder}</h3>

                      {m?.name && (
                        <li
                          key={m.folder + Math.random}
                          className="requestList"
                        >
                          <Link
                            key={`${m?.name}-${i}--m-hash`}
                            href={`#${m?.name.toLowerCase()}`}
                          >
                            {m?.name}
                          </Link>
                        </li>
                      )}
                      {/* {m?.name?.includes("Get Flow Status") && (
                    <>
                      <br />
                    </>
                  )} */}
                    </ul>
                  </>
                ))}
              </div>

              <div className="col">
                {methods.slice(10, 20).map((m, i) => (
                  <>
                    {m?.name && (
                      <li key={m.folder + Math.random} className="requestList">
                        <Link
                          key={`${m.name}-${i}--m-hash`}
                          href={`#${m?.name.toLowerCase()}`}
                        >
                          {m?.name}
                        </Link>
                      </li>
                    )}
                    {/* {m?.name?.includes("Get Flow Status") && (
                    <>
                      <br />
                    </>
                )} */}
                  </>
                ))}
              </div>
              <div className="col">
                {methods.slice(21, methods.length).map((m, i) => (
                  <>
                    {m?.name && (
                      <li key={m.folder + Math.random} className="requestList">
                        <Link
                          key={`${m?.name}-${i}--m-hash`}
                          href={`#${m?.name.toLowerCase()}`}
                        >
                          {m?.name}
                        </Link>
                      </li>
                    )}
                    {/* {m?.name?.includes("Get Flow Status") && (
                    <>
                      <br />
                    </>
              )} */}
                  </>
                ))}
              </div>
            </div>
          )}

          {methods.length > 30 && (
            <div className="row" style={{ margin: "0px" }}>
              <div className="col">
                <ul>
                  {methods.slice(0, 10).map((m) => (
                    <>
                      <li key={m.folder + Math.random} className="requestList">
                        <Link
                          key={`${m?.name}-${m?.method}--m-hash`}
                          href={`#${m.name.toLowerCase()}`}
                        >
                          {m?.name}
                        </Link>
                      </li>
                    </>
                  ))}
                </ul>
              </div>
              <div className="col">
                {methods.slice(11, 20).map((m) => (
                  <>
                    <li key={m.folder + Math.random} className="requestList">
                      <Link
                        key={`${m?.name}-${m?.method}--m-hash`}
                        href={`#${m?.name.toLowerCase()}`}
                      >
                        {m?.name}
                      </Link>
                    </li>
                  </>
                ))}
              </div>
              <div className="col">
                {methods.slice(21, methods.length).map((m) => (
                  <>
                    <li key={m.folder + Math.random} className="requestList">
                      <Link
                        key={`${m?.name}-${m?.method}--m-hash`}
                        href={`#${m?.name.toLowerCase()}`}
                      >
                        {m?.name}
                      </Link>
                    </li>
                  </>
                ))}
              </div>
            </div>
          )}

          <hr />
        </>
      )}
    </>
  );
}

export { APIReferenceNav };
