async function main() {
  await exec(`git add .`);
  await exec(`git commit -m "build ${new Date()}"`);
  await exec(`git pull`);
  await exec(`git push`);
  await exec(`git checkout master`);
  await exec(`git merge develop`);
}

function exec(script: string) {
  return new Promise((resolve, reject) => {
    const { exec } = require("child_process");
    console.log(script);
    exec(script, (err: Error, result: any) => {
      if (err) {
        reject(err);
        return;
      }
      console.log(result);
      resolve(result);
    });
  });
}
main();
