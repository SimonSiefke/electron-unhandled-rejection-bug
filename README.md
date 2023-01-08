# Electron unhandled rejection bug

## Setup

```sh
git clone git@github.com:SimonSiefke/electron-unhandled-rejection-bug.git &&
cd electron-unhandled-rejection-bug &&
npm ci &&
npm run dev
```

## Output with node index.js

```
Unhandled Rejection: Error: oops
    at main (/tmp/electron-unhandled-rejection-bug/index.js:7:9)
    at Object.<anonymous> (/tmp/electron-unhandled-rejection-bug/index.js:10:1)
    at Module._compile (node:internal/modules/cjs/loader:1218:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1272:10)
    at Module.load (node:internal/modules/cjs/loader:1081:32)
    at Module._load (node:internal/modules/cjs/loader:922:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:23:47
```

## Output with npx electron .

```
Unhandled Rejection: Error: oops
    at main (/tmp/electron-unhandled-rejection-bug/index.js:7:9)
    at Object.<anonymous> (/tmp/electron-unhandled-rejection-bug/index.js:10:1)
    at Module._compile (node:internal/modules/cjs/loader:1141:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1196:10)
    at Module.load (node:internal/modules/cjs/loader:1011:32)
    at Module._load (node:internal/modules/cjs/loader:846:12)
    at f._load (node:electron/js2c/asar_bundle:2:13328)
    at loadApplicationPackage (/tmp/electron-unhandled-rejection-bug/node_modules/electron/dist/resources/default_app.asar/main.js:121:16)
    at Object.<anonymous> (/tmp/electron-unhandled-rejection-bug/node_modules/electron/dist/resources/default_app.asar/main.js:233:9)
    at Module._compile (node:internal/modules/cjs/loader:1141:14)
(node:14838) UnhandledPromiseRejectionWarning: Error: oops
    at main (/tmp/electron-unhandled-rejection-bug/index.js:7:9)
    at Object.<anonymous> (/tmp/electron-unhandled-rejection-bug/index.js:10:1)
    at Module._compile (node:internal/modules/cjs/loader:1141:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1196:10)
    at Module.load (node:internal/modules/cjs/loader:1011:32)
    at Module._load (node:internal/modules/cjs/loader:846:12)
    at f._load (node:electron/js2c/asar_bundle:2:13328)
    at loadApplicationPackage (/tmp/electron-unhandled-rejection-bug/node_modules/electron/dist/resources/default_app.asar/main.js:121:16)
    at Object.<anonymous> (/tmp/electron-unhandled-rejection-bug/node_modules/electron/dist/resources/default_app.asar/main.js:233:9)
    at Module._compile (node:internal/modules/cjs/loader:1141:14)
(Use `electron --trace-warnings ...` to show where the warning was created)
(node:14838) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 1)
```
