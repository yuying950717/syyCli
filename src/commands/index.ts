import { create } from "./actions/create";
const commands = [
  {
    name: "create <project-name>",
    description: "create a project",
    argument: {
      arg: "<string>",
      desc: "project name",
    },
    option: [
      {
        cmd: "--f, --force",
        desc: "display the project name",
      },
    ],
    action: create,
  },
];
export default commands;
