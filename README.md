# Figment Documentation

This repository contains Figment API product documentation, built with [Docusaurus](https://docusaurus.io).

## Setup Local Development Environment

- Install [`git`](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) (check with `git --version`)
- Install [Node.js v16+](https://nodejs.org/en/download/) (check with `node -v`)
- Install [yarn](https://classic.yarnpkg.com/en/docs/install) (check with `yarn --version`)

### Clone the Repository

- `git clone git@github.com/figment-networks/figment-documentation.git`
- `cd figment-documentation`

### Install Dependencies with Yarn

- Run `yarn install`

### Setup .env File

Rename the existing `.env-example` file to `.env`, run:

```bash
cp .env-example .env
```

You should now have a file named `.env` in the project root directory: `/figment-documentation/.env`.

The file must always include the keys `DEVELOPMENT`, `API_KEY` and `PROXY_HOST`.
A proxy is used to prevent the API key from being exposed on the client-side.

```text
DEVELOPMENT=1
API_KEY=<An approved API key>
PROXY_HOST=<API Proxy URL>
```

Contact Figment DevRel for a valid `API_KEY` and `PROXY_HOST` for testing purposes. NOTE: These ENV variables are only needed if you’re planning to use or develop the interactive requests. Otherwise, the development server runs normally without them.

### Running the Development Server

- Run `yarn start` to start the Docusaurus server (on port 3000 by default, specify with `--port XXXX`)

Most changes will be displayed automatically, but in some cases you might need to restart the server.
First, shut it down by pressing `CTRL+C` in the terminal where the server is running.
You can then restart it by issuing the command `yarn start`.

The `.env` file must be present before starting the development server if you intend to use or test the API Reference interactivity.

If any changes are made to the `.env` file while the development server is running, restart the development server.

## Branches & Making Changes

Only base feature branches and Pull Requests on the `development` branch.
The `main` branch requires a reviewed Pull Request to merge changes, as this will trigger a deployment to production.

### Generating Docs from Schemas

The schema files are synced automatically from [Postman](https://figmentio.postman.co) Collections.
The `generate.js` script transforms them for our needs at build time.

Ensure that the contents of `/docs/staking`, `docs/validators`, `docs/rewards` remain in the `.gitignore` file to prevent leaking any development API keys you are using for the interactivity feature.

### Building for Deployment

- Run `yarn build` to output the static site for deployment. Currently this is handled as part of the GitHub Pages deployment pipeline.
