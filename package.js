Package.describe({
  name: 'iovdin:sibilant',
  summary: "A lisp that compiles to javascript",
  version: '0.0.1',
  git: 'https://github.com/iovdin/meteor-sibilant.git',
  documentation: 'README.md'
});

Package.registerBuildPlugin({
  name: "compileSibilant",
  use: [],
  sources: [
    'plugin/compile-sibilant.js'
  ],
  npmDependencies: {"sibilant": "0.2.0"}
});
