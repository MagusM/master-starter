import fs from "fs";

export function cleanupDefaultFiles() {
  console.log("🧹 Cleaning up default Next.js files...");
  fs.rmSync("src", { recursive: true, force: true });
  fs.rmSync("pages", { recursive: true, force: true });
  fs.rmSync("public", { recursive: true, force: true });
}
