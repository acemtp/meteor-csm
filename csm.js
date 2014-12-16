// *.js
Plugin.registerSourceHandler('c.js', { archMatching: 'os' }, function () {});
Plugin.registerSourceHandler('s.js', { archMatching: 'web' }, function () {});
Plugin.registerSourceHandler('client.js', { archMatching: 'os' }, function () {});
Plugin.registerSourceHandler('server.js', { archMatching: 'web' }, function () {});

// *.coffee
Plugin.registerSourceHandler('c.coffee', { archMatching: 'os' }, function () {});
Plugin.registerSourceHandler('s.coffee', { archMatching: 'web' }, function () {});
Plugin.registerSourceHandler('client.coffee', { archMatching: 'os' }, function () {});
Plugin.registerSourceHandler('server.coffee', { archMatching: 'web' }, function () {});