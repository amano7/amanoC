'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('          Yasushi Amano'),
  handle: chalk.gray('amano7'),
  work: chalk.white('Programer / Eilsystem Co.,Ltd'),
  mail: chalk.white('yasushi.amano@eilsystem.com'),
  facebook: chalk.gray('https://www.facebook.com/') + chalk.cyan('s7amano'),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('amano7'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.cyan('s7amano'),
  npx: chalk.red('npx') + ' ' + chalk.white('amano7'),
  labelWork: chalk.white.bold('    Work:'),
  labelMail: chalk.white.bold('    Mail:'),
  labelFacebook: chalk.white.bold('Facebook:'),
  labelTwitter: chalk.white.bold(' Twitter:'),
  labelLinkedIn: chalk.white.bold('LinkedIn:'),
  labelCard: chalk.white.bold('    Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const mailing = `${data.labelMail}  ${data.mail}`
const facebooking = `${data.labelFacebook}  ${data.facebook}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
               newline + newline + // Add one whole blank line
               working + newline + // data.labelWork + data.work
               mailing + newline + // data.labelWork + data.work
               facebooking + newline + // data.labelFacebook + data.facebook
               twittering + newline + // data.labelTwitter + data.twitter
               linkedining + newline + // data.labelLinkedIn + data.linkedin
               carding // data.labelCard + data.npx

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
