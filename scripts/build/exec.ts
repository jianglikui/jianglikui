export function exec(script: string) {
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
