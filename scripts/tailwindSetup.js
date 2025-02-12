import { execSync } from "child_process";
import fs from "fs";

export function setupTailwind(packageManager) {
  console.log("🎨 Setting up Tailwind CSS...");

  try {
    console.log(`📦 Installing Tailwind CSS with ${packageManager}...`);
    execSync(`${packageManager} add -D tailwindcss postcss autoprefixer`, { stdio: "inherit" });

    let tailwindInitCmd;

    // ✅ Fix for Bun: Directly use the local Tailwind CLI binary
    if (packageManager === "bun") {
      tailwindInitCmd = "./node_modules/.bin/tailwindcss init -p";
    } else if (packageManager === "pnpm") {
      tailwindInitCmd = "pnpm dlx tailwindcss init -p";
    } else if (packageManager === "yarn") {
      tailwindInitCmd = "yarn dlx tailwindcss init -p";
    } else {
      tailwindInitCmd = "npx tailwindcss init -p";
    }

    console.log(`🔧 Running: ${tailwindInitCmd}`);
    execSync(tailwindInitCmd, { stdio: "inherit", shell: true });
  } catch (error) {
    console.log("⚠️ Tailwind CLI initialization failed. Creating Tailwind config manually...");

    // Ensure Tailwind config file exists
    if (!fs.existsSync("tailwind.config.js")) {
      fs.writeFileSync(
        "tailwind.config.js",
        `export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: []
};`
      );
      console.log("✅ Created default tailwind.config.js");
    }
  }

  // Ensure global styles exist
  if (!fs.existsSync("src/styles/globals.css")) {
    fs.mkdirSync("src/styles", { recursive: true });
    fs.writeFileSync("src/styles/globals.css", `@tailwind base;\n@tailwind components;\n@tailwind utilities;`);
    console.log("✅ Created src/styles/globals.css");
  }

  console.log("✅ Tailwind CSS setup complete.");
}
