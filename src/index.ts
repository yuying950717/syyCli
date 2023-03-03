#!/usr/bin/env node
import { Command } from "commander";
import Pack from "../package.json";
import inquirer from "inquirer";
import commands from "./commands/index";

const program = new Command();

program
  .name(Pack.name)
  .version(Pack.version)
  .helpOption("-h,--help")
  .usage("<command> [option]");

commands.forEach((item) => {
  const current = program.command(item.name);
  // .description(item.description)
  // .argument(item.argument.arg, item.argument.desc)
  item.option &&
    item.option.length &&
    item.option.forEach((op) => {
      current.option(op.cmd, op.desc || "");
    });
  current.action(item.action);
});

program.parse();
