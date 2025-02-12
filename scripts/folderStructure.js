import fs from "fs";

export function createFolderStructure(router) {
  console.log("📁 Setting up best-practice folder structure...");

  const baseFolders = ["src/components", "src/utils", "src/actions", "src/lib", "src/hooks", "src/styles"];
  baseFolders.forEach((folder) => fs.mkdirSync(folder, { recursive: true }));

  if (router === "app") {
    fs.mkdirSync("src/app", { recursive: true });
    fs.writeFileSync("src/app/layout.tsx", "export default function Layout({ children }) { return <>{children}</>; }");
    fs.writeFileSync("src/app/page.tsx", "export default function Page() { return <h1>Home</h1>; }");
  } else {
    fs.mkdirSync("pages", { recursive: true });
    fs.writeFileSync("pages/index.tsx", "export default function Home() { return <h1>Home</h1>; }");
  }
}
