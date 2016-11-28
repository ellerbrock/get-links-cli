#!/usr/bin/env node

'use strict'

import getLinks from 'get-links'
import log from 'console-emoji'
import { basename } from 'path'
import commander from 'commander'

commander
  .option('-u, --url <url>', 'URL')
  .option('-c, --css <css>', 'CSS-Selector')
  .parse(process.argv)

if (!commander.url || !commander.css) {
  log('Missing required parameters! (URL, CSS-Selector)', 'err')
  log(`Usage: ${basename(__filename)} -u 'http://domain.tld' -c 'a'`, 'yellow')
} else {
  getLinks(commander.url, commander.css)
    .then(links => {
      links.forEach(v => log(v, 'green'))
    })
}
