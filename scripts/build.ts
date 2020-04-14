async function main() {
  const branchsString = (await exec("git branch")) as string;
  const branch = branchsString
    .split("\n")
    .filter(line => line.indexOf("*") !== -1)[0]
    .split(" ")[1];

  await exec(`git add .`);
  await exec(`git commit -m "build ${new Date()}"`);
  // await exec(`git pull`);
  // await exec(`git push`);
  await exec(`git checkout master`);
  await exec(`git merge ${branch}`);
  cleanMasterBranch({
    path: "./",
    excludesFloder: ["dist", ".git", "node_modules"],
    excludesFile: ["yarn-error.log", ".gitignore"]
  });
  // await exec(`git pull`);
  // await exec(`git push`);
  await exec(`git checkout ${branch}`);
}

interface FileSelector {
  path: string;
  excludesFile?: Array<string>;
  excludesFloder?: Array<String>;
}

function cleanMasterBranch(fileSelector: FileSelector) {
  var fs = require("fs");
  const s = fs.readFile(".gitignore");
  console.log(s);
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
