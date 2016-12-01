# [get-links-cli](https://www.npmjs.com/package/get-links-cli)

[![Javascript](https://badges.frapsoft.com/javascript/code/javascript.svg?v=100)](https://github.com/ellerbrock/javascript-badges/) [![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/ellerbrock/javascript-badges/) [![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=102)](https://github.com/ellerbrock/open-source-badges/) [![Gitter Chat](https://badges.gitter.im/frapsoft/frapsoft.svg)](https://gitter.im/frapsoft/frapsoft/)

_get links via dom selector (cli version)_

**Info:** You can find the non-CLI Version [here](https://www.npmjs.com/package/get-links)

## Installation

`npm install -g get-links-cli`

or

`yarn global add get-links-cli`

## Example

get all links from site:

`get-links -u https://domain.tld -c a`

get all links with css class ".video":

`get-links -u https://domain.tld -c "a .video"`

save links to file:

`get-links -u https://domain.tld -c "a .video" -o links.txt`


## Parameter

- `-u [--url]` : URL (required)
- `-c [--css]` : DOM/CSS Selector (required)
- `-o [--out]` : Output to file (optional)

### Contact / Social Media

_Get the latest News about Web Development, Open Source, Tooling, Server & Security_

[![Github](https://github.frapsoft.com/social/github.png)](https://github.com/ellerbrock/)[![Docker](https://github.frapsoft.com/social/docker.png)](https://hub.docker.com/u/frapsoft/)[![npm](https://github.frapsoft.com/social/npm.png)](https://www.npmjs.com/~ellerbrock)[![Twitter](https://github.frapsoft.com/social/twitter.png)](https://twitter.com/frapsoft/)[![Facebook](https://github.frapsoft.com/social/facebook.png)](https://www.facebook.com/frapsoft/)[![Google+](https://github.frapsoft.com/social/google-plus.png)](https://plus.google.com/116540931335841862774)[![Gitter](https://github.frapsoft.com/social/gitter.png)](https://gitter.im/frapsoft/frapsoft/)

### License

Copyright (c) 2016 [Maik Ellerbrock](https://github.com/ellerbrock/)

[![MIT Licence](https://badges.frapsoft.com/os/mit/mit-125x28.png?v=102)](https://opensource.org/licenses/mit-license.php)
