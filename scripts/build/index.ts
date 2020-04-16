import { cleanMasterBranch } from "./clearMasterBranch";
import { exec } from "child_process";

async function main() {
  // const branchsString = (await exec("git branch")) as string;
  // const branch = branchsString
  //   .split("\n")
  //   .filter(line => line.indexOf("*") !== -1)[0]
  //   .split(" ")[1];

  await exec(`git status`);
  // await exec(`git add .`);
  // await exec(`git commit -m "build ${new Date()}"`);
  // // await exec(`git pull`);
  // // await exec(`git push`);
  // await exec(`git checkout master`);
  // await exec(`git merge ${branch}`);
  cleanMasterBranch({
    path: "./",
    excludes: ["yarn-error.log", ".gitignore", "dist", ".git", "node_modules"],
  });
  // await exec(`git pull`);
  // await exec(`git push`);
  // await exec(`git checkout ${branch}`);
}

main();
