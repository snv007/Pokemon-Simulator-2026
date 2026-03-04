const { spawn } = require("child_process");

const args = process.argv.slice(2);
const target = args[0] || "start";
const separator = args.indexOf("--");
const extra = separator >= 0 ? args.slice(separator + 1) : args.slice(1);

const npmArgs = ["run", target];
if (extra.length) npmArgs.push("--", ...extra);

const child = spawn("npm", npmArgs, {
  stdio: "inherit",
  shell: true,
});

child.on("exit", (code) => {
  process.exit(code ?? 0);
});
