#!/usr/bin/env node

'use strict'

import getLinks from 'get-links'
import log from 'console-emoji'
import commander from 'commander'
import * as fs from 'fs'

commander
  .option('-u, --url <url>', 'URL')
  .option('-c, --css <css>', 'CSS-Selector')
  .option('-o, --out [out]', 'Output to file')
  .parse(process.argv)

if (!commander.url || !commander.css) {
  log('Missing required parameters!', 'err')
  log(`Example Usage: get-links -u 'https://domain.tld' -c 'a .title'`, 'warn')
  log(`Optional Parameter: -o 'links.txt' (save output to file)`, 'ok')
} else {
  getLinks(commander.url, commander.css)
    .then(links => {
      if (commander.out) {
        fs.access(commander.out, fs.constants.F_OK, res => {
          if (!res) return log(`File already exists! ${commander.out}`, 'err')
          else {
            fs.writeFile(commander.out, links.join('\n'), (err) => {
              if (err) throw new Error(log(`Could not write to file ${commander.out}`, 'err'))
              log(`Successful saved links to ${commander.out}`, 'ok')
            })
          }
        })
      } else return links.forEach(v => log(v, 'green'))
    })
}
