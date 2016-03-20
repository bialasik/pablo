#!/usr/bin/env node

const program = require('commander');

const package = require('./../package.json');

program
  .version(package.version)
  .command('start')
  .action(() => {
    console.log(1);
  })

program.parse(process.argv);
