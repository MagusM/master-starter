import fs from "fs";

export function setupReadme() {
  console.log("📜 Creating README.md...");
  fs.writeFileSync("README.md", "# Next.js Starter Kit\n\n## 🚀 Getting Started\n\n```sh\nnpm run dev\n```\n");
}
