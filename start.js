const { spawn } = require("child_process");

const projects = [
  { name: "client-store", cmd: "npm", args: ["start"] },
  { name: "client-upload", cmd: "npm", args: ["start"] },
  { name: "server-store", cmd: "node", args: ["index.js"] },
  { name: "server-upload", cmd: "node", args: ["index.js"] },
];

projects.forEach(({ name, cmd, args }) => {
  const proc = spawn(cmd, args, {
    cwd: `./${name}`,  // go inside the folder
    stdio: "inherit",  // show logs in same terminal
    shell: true,       // needed for npm on Windows
  });

  proc.on("close", (code) => {
    console.log(`${name} exited with code ${code}`);
  });
});
