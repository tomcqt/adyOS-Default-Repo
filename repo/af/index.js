import * as cmd from "../../../../../cmd.js";

function cmd(arg) {
  console.log(arg.usr.username + "@" + arg.usr.systemname);
  console.log("OS       : adyOS");
  console.log("Version  : " + arg.ver);
  console.log("Commands : " + cmd.cmd.length);
}

export { cmd };
