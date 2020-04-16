import {
  readFileSync,
  readdirSync,
  statSync,
  unlinkSync,
  renameSync,
} from "fs";
import { resolve } from "path";

interface FileSelector {
  path: string;
  excludes?: Array<string>;
}

export async function cleanMasterBranch(fileSelector: FileSelector) {
  const excludes = getExcludes(fileSelector.excludes);
  console.log("excludes", excludes);
  function isExc(path: string) {
    return excludes.filter((exc) => path.indexOf(exc) !== -1).length !== 0;
  }

  function removeChildren(path: string) {
    //是否为排除文件
    if (isExc(path)) return;
    //获取文件列表
    const list = readdirSync(path).map((item) => resolve(path, item));
    //遍历子文件
    list.forEach((item) => {
      //是否为文件夹
      const isFloder = statSync(item).isDirectory();
      if (isFloder) {
        //是文件夹，递归
        removeChildren(item);
      } else if (!isExc(item)) {
        //不是文件夹，且不是排除文件
        unlinkSync(item);
      }
    });
  }
  removeChildren(resolve(fileSelector.path));
}

function getExcludes(excludesStringArray: Array<string>) {
  let excludes = readFileSync(".gitignore", "utf-8")
    .trim()
    .split("\r\n")
    .concat(excludesStringArray);
  excludes = [...Array.from(new Set(excludes))].map((path) => resolve(path));
  return excludes;
}
