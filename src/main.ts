import { execaCommandSync, execaSync } from "execa";

const cmd = (cmdStr: string) =>
  execaCommandSync(cmdStr, { stdio: "inherit", shell: true });

cmd("type kubectl");
cmd("type helm");
cmd("type git");
cmd("helm version");
