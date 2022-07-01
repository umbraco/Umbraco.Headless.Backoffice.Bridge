# Umbraco Headless Backoffice Bridge

This repository contains helpers and components providing native javascript interfaces for the Umbraco Backoffice. The goal is to hide the actual implementation (currently angular.js), making it easier to migrate to another implementation in the future by only having to update this library.

## Usage

The library is available through CDN and can be used directly in a custom editor.

To import and register the custom elements making them available to use, call the following at the beginning of your editor

```js
// import latest version
import "https://cdn.jsdelivr.net/npm/@umbraco/headless-backoffice-bridge@latest/headless-backoffice-bridge.min.js";

// import a specific version
import "https://cdn.jsdelivr.net/npm/@umbraco/headless-backoffice-bridge@x.x.x/headless-backoffice-bridge.min.js";
```

To use one of the components, e.g. the mediaPicker it can be imported like this

```js
// import the mediaPicker
import { mediaPicker } from "https://cdn.jsdelivr.net/npm/@umbraco/headless-backoffice-bridge@latest/headless-backoffice-bridge.min.js";
```

**NOTE: This also registers the custom elements**

To use the library with npm it can be installed using the following commannd:

```sh
npm install @umbraco/headless-backoffice-bridge
```

Then import it in a file, e.g. to use the mediaPicker

```js
import mediaPicker from '@umbraco/headless-backoffice-bridge/pickers/mediaPicker';
```

## Development

Fork and clone down the repository and run

```sh
npm install
```

to install the required dependencies, then run

```sh
npm start
```

to build the library and start a watcher that automatically rebuilds when any source file is changed.

### Testing changes

To test the changes you're making you can start a http server by running

```sh
npx http-server --cors -c-1
```

This will start a http server with cors enabled and caching disabled (usually on http://127.0.0.1:8080).

In your custom editor in Heartcore you can then import the library

```js
import 'http://127.0.0.1:8080/headless-backoffice-bridge.min.js';
```

**NOTE: You might need to start the server with TLS enabled, see https://github.com/http-party/http-server#tlsssl for more info**

### API Documentation

The api documentation can be generated using `typedoc` by running

```sh
npm run docs
```

This will update the documentation located in the `docs` directory.

## Bugs, issues and Pull Requests

If you encounter a bug when using this library you are welcome to open an issue in the issue tracker of this repository. We always welcome Pull Request and please feel free to open an issue before submitting a Pull Request to discuss what you want to submit.

Questions about usage should be posted to the Headless forum on [our.umbraco.com](https://our.umbraco.com).

