import { format } from "date-fns";

async function main() {
  await exec(`git add .`);
  await exec(`git commit -m "build ${format(new Date(), "LLLL")}"`);
}

function exec(script: string) {
  return new Promise((resolve, reject) => {
    const { exec } = require("child_process");
    exec(script, (err: Error, result: any) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(result);
    });
  });
}
main();
