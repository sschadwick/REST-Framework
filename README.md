# REST-Framework

[![Build Status](https://travis-ci.org/sschadwick/REST-Framework.svg)](https://travis-ci.org/sschadwick/REST-Framework)

This is a REST framework for a server using Node.js

This framework is intended to simplify the creation of a node server through easy route creation and REST verb definition. The package can be installed via ```npm install rest-framework```

Require the package into your project:
```var app = require('REST-Framework');```

Once this framework is required in to a project, routes can be added using the following syntax:
```app.addRoute('/someroute', callback);```

After your routes have been added, your server needs to be started with the syntax:
```add.createServer(portNumber, callback);```
