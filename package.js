Package.describe({
  name: 'acemtp:csm',
  summary: 'Organize files in module structure',
  version: '1.0.2',
  git: 'https://github.com/acemtp/meteor-csm.git'
});

Package.registerBuildPlugin({
  name: "csmFilters",
  sources: [
    "csm.js",
  ]
});
