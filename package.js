Package.describe({
  summary: "Juice wrapper package",
  version: '0.1.1',
  name: "sacha:juice",
  git: "https://github.com/SachaG/meteor-juice"
});

Npm.depends({
  juice: "0.5.0", 
});

Package.onUse(function (api) {

  api.add_files([
    'lib/juice.js',
  ], ['server']);
  
  api.export([
    'juice'
  ]);
});
