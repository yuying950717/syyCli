import { readDir, mkDir, rm } from "../../utils/file";
export async function create(projectName, option) {
  // node->fs
  // 1.判断文件夹是否存在，如果存在，判断force存在，删除
  const currPath = process.cwd() + "\\" + projectName;
  console.log("path:", currPath, projectName);
  try {
    const exist = await readDir(projectName);
    if (exist) {
      if (option.f || option.force) {
        console.log("删除文件夹");
        await rm(projectName);
      } else {
        console.log("项目名已存在");
        return;
      }
    }
    await mkDir(projectName);
    // 下载git
    // download-git-repo
  } catch (e) {
    console.log(e);
  }
}
