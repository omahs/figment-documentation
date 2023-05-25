import React from "react";
import Link from "@docusaurus/Link";

function toDashCase(str) {
  return str?.toLowerCase().replace(/\s+/g, "-");
}

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
              <div className="row refLinksRow">
                <div className="col">
                  <ul className="referenceLinks">
                    {methods.map((m, i) => (
                      <>
                        <li
                          key={m.folder + Math.random}
                          className="requestList"
                        >
                          <Link
                            key={`${m?.name}-${m?.method}--m-hash`}
                            href={`#${toDashCase(m?.name)}`}
                          >
                            {m?.name}
                          </Link>
                        </li>
                      </>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}

          {methods.length > 10 && methods.length < 30 && (
            <div className="row" style={{ marginLeft: "-48px" }}>
              <div className="col">
                <ul className="referenceLinks">
                  {methods.slice(0, 10).map((m, i) => (
                    <>
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
                    </>
                  ))}
                </ul>
              </div>

              <div className="col">
                <ul className="referenceLinks">
                  {methods.slice(10, 20).map((m, i) => (
                    <>
                      {m?.name && (
                        <li
                          key={m.folder + Math.random}
                          className="requestList"
                        >
                          <Link
                            key={`${m.name}-${i}--m-hash`}
                            href={`#${m?.name.toLowerCase()}`}
                          >
                            {m?.name}
                          </Link>
                        </li>
                      )}
                    </>
                  ))}
                </ul>
              </div>

              <div className="col">
                <ul className="referenceLinks">
                  {methods.slice(21, methods.length).map((m, i) => (
                    <>
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
                    </>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {methods.length > 30 && (
            <div className="row" style={{ margin: "0px" }}>
              <div className="col">
                <ul className="referenceLinks">
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
                <ul className="referenceLinks">
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
                </ul>
              </div>
              <div className="col">
                <ul className="referenceLinks">
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
                </ul>
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
