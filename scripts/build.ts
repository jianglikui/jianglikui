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

  function deleteall(path: string) {
    var files = [];
    if (fs.existsSync(path)) {
      files = fs.readdirSync(path);
      files.forEach(function(file: string, index: number) {
        var curPath = path + "/" + file;
        if (fs.statSync(curPath).isDirectory()) {
          // recurse
          const canDel =
            fileSelector.excludesFloder.filter(f => {
              return curPath.substr(0, f.length) !== ".//" + f;
            }).length === 0;
          console.log(canDel, "recurse", curPath);

          if (canDel && curPath !== path) {
            deleteall(curPath);
          }
        } else {
          // delete file
          console.log("file", curPath);
          if (
            fileSelector.excludesFile.filter(f => curPath.indexOf(f) === -1)
              .length === 0
          ) {
            fs.unlinkSync(curPath);
          }
        }
      });
      fs.rmdirSync(path);
    }
  }
  deleteall(fileSelector.path);
  console.log(fileSelector);
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
