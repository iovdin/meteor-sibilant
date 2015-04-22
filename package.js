Package.describe({
  summary: "A lisp that compiles to javascript",
  version: "1.0.0"
});

Package.registerBuildPlugin({
  name: "compileSibilant",
  use: [],
  sources: [
    'plugin/compile-sibilant.js'
  ],
  npmDependencies: {"sibilant": "0.2.0"}
});
