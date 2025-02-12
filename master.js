import prompts from "prompts";
import {execSync} from "child_process";

import {cleanupDefaultFiles} from "./scripts/cleanup.js";
import {createFolderStructure} from "./scripts/folderStructure.js";
import {setupEnvFile} from "./scripts/envSetup.js";
import {setupReadme} from "./scripts/readmeSetup.js";
import {setupTailwind} from "./scripts/tailwindSetup.js";
import {installDependencies} from "./scripts/installDeps.js";

async function setupProject() {
  const projectPath = process.argv[2] || "./tmp_nextjs_master_project";

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
  execSync(createCmd, { stdio: "inherit" });

  process.chdir(projectPath);

  // Step 2: Clean up default files
  cleanupDefaultFiles();

  // Step 3: Create a clean folder structure
  createFolderStructure(response.router);

  // Step 4: Install dependencies
  installDependencies(response);

  // Step 5: Set up Tailwind (if selected)
  if (response.tailwind) setupTailwind(response.packageManager);

  // Step 6: Generate environment variables file
  setupEnvFile(response.database, response.orm);

  // Step 7: Create README.md
  setupReadme();

  console.log("\n✅ Setup Complete!");
  console.log(`\nNext Steps:\n`);
  console.log(`📂 Navigate to project: cd ${projectPath}`);
  console.log(`▶️ Run the project: ${response.packageManager} run dev\n`);

  process.exit(0);
}

setupProject();
