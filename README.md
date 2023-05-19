# Glitch Starter Kit for JavaScript Compute

Get to know the Fastly Compute@Edge environment with a basic starter that puts your Glitch origin website behind a Compute service.

**For more details about other starter kits for Compute@Edge, see the [Fastly developer hub](https://developer.fastly.com/solutions/starters)**

## Understanding the code

This starter is intentionally lightweight, and requires no dependencies aside from the [`@fastly/js-compute`](https://www.npmjs.com/package/@fastly/js-compute) npm package. It will help you understand the basics of processing requests at the edge using Fastly. This starter includes implementations of common patterns explained in our [using Compute@Edge](https://developer.fastly.com/learning/compute/javascript/) and [VCL migration](https://developer.fastly.com/learning/compute/migrate/) guides.

The starter uses a default backend named `origin_0` and returns the response from the origin without changes. Once deployed, you will have a Fastly service running on Compute@Edge that can carry out any processing at the edge that you add to the `index.js` code.

The template uses webpack to bundle `index.js` and its imports into a single JS file, `bin/index.js`, which is then wrapped into a `.wasm` file, `bin/index.wasm` using the `js-compute-runtime` CLI tool bundled with the `@fastly/js-compute` npm package, and bundled into a `.tar.gz` file ready for deployment to Compute@Edge.
