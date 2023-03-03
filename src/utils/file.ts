import fs from "fs";
export const readDir = (path: string) =>
  new Promise((res, rej) => {
    fs.readdir(path, (err, files) => {
      if (!err) res(true);
      res(false);
    });
  });

export const mkDir = (name: string) => {
  return new Promise((res, rej) => {
    fs.mkdir(name, { recursive: true }, (err, path) => {
      if (!err) res(path);
      rej(err);
    });
  });
};

export const rm = (name: string) => {
  return new Promise((res, rej) => {
    fs.rmdir(name, (err) => {
      if (!err) rej("rm success");
      rej(err);
    });
  });
};
