import prompts from "prompts";
import { execSync, execSync as exec } from "child_process";
import fs from "fs";
import path from "path";

async function setupProject() {
  // Get project path from CLI arguments or use current directory
  const projectPath = process.argv[2] || "./tmp_nextjs_master_project";

  // Prompt user for project configurations
  const response = await prompts([
    {
      type: "select",
      name: "packageManager",
      message: "Choose your package manager:",
      choices: [
        { title: "npm", value: "npm" },
        { title: "yarn", value: "yarn" },
        { title: "pnpm", value: "pnpm" },
        { title: "bun", value: "bun" },
      ],
    },
    {
      type: "select",
      name: "router",
      message: "Choose routing strategy:",
      choices: [
        { title: "App Router (recommended)", value: "app" },
        { title: "Page Router", value: "pages" },
      ],
    },
    {
      type: "select",
      name: "database",
      message: "Choose database type:",
      choices: [
        { title: "SQL", value: "sql" },
        { title: "MongoDB", value: "mongo" },
      ],
    },
    {
      type: (prev) => (prev === "sql" ? "select" : null),
      name: "orm",
      message: "Choose SQL ORM:",
      choices: [
        { title: "Drizzle", value: "drizzle" },
        { title: "Prisma", value: "prisma" },
      ],
    },
    {
      type: "confirm",
      name: "tailwind",
      message: "Include Tailwind CSS?",
      initial: true,
    },
    {
      type: "confirm",
      name: "framerMotion",
      message: "Include Framer Motion?",
      initial: false,
    },
    {
      type: "confirm",
      name: "clerk",
      message: "Include Clerk?",
      initial: false,
    },
    {
      type: "confirm",
      name: "shadcn",
      message: "Include ShadCN?",
      initial: false,
    },
  ]);

  console.log(`🚀 Creating Next.js project in: ${projectPath}`);

  // Step 1: Create Next.js App
  const createCmd = `CI=true ${response.packageManager} create next-app@latest ${projectPath} --ts --eslint --no-tailwind --no-src-dir --no-experimental-app`;
  exec(createCmd, { stdio: "inherit" });

  process.chdir(projectPath);

  // Step 2: Remove default files
  console.log("🧹 Cleaning up default Next.js files...");
  fs.rmSync("src", { recursive: true, force: true });
  fs.rmSync("pages", { recursive: true, force: true });

  // Step 3: Create new folder structure
  const baseFolders = ["src/components", "src/utils", "src/actions", "src/lib", "src/hooks", "src/styles"];
  baseFolders.forEach((folder) => fs.mkdirSync(folder, { recursive: true }));

  // Create app/pages structure
  if (response.router === "app") {
    fs.mkdirSync("src/app", { recursive: true });
    fs.writeFileSync("src/app/layout.tsx", "export default function Layout({ children }) { return <>{children}</>; }");
    fs.writeFileSync("src/app/page.tsx", "export default function Page() { return <h1>Home</h1>; }");
  } else {
    fs.mkdirSync("pages", { recursive: true });
    fs.writeFileSync("pages/index.tsx", "export default function Home() { return <h1>Home</h1>; }");
  }

  // Step 4: Generate README
  fs.writeFileSync("README.md", "# Next.js Starter Kit\n\n## 🚀 Getting Started\n\n```sh\nnpm run dev\n```\n");

  // Step 5: Generate .env.local
  fs.writeFileSync(".env.local", "DATABASE_URL=\nNEXT_PUBLIC_API_URL=\n");

  console.log("\n✅ Setup Complete!");
  console.log(`\nNext Steps:\n`);
  console.log(`📂 Navigate to project: cd ${projectPath}`);
  console.log(`▶️ Run the project: ${response.packageManager} run dev\n`);

  process.exit(0);
}

setupProject();
