import { execSync } from "child_process";
import fs from "fs";

export function setupTailwind(packageManager) {
  console.log("🎨 Setting up Tailwind CSS...");

  try {
    // Try to initialize Tailwind normally
    execSync("npx tailwindcss init -p", { stdio: "inherit" });
  } catch (error) {
    console.log("⚠️ Failed to run npx. Trying package manager-specific installation...");

    // Use package manager-specific fallback
    if (packageManager === "bun") {
      try {
        execSync("bunx tailwindcss init -p", { stdio: "inherit" });
      } catch (err) {
        console.log("⚠️ Bun failed. Creating Tailwind config manually...");
      }
    } else {
      try {
        execSync(`${packageManager} dlx tailwindcss init -p`, { stdio: "inherit" });
      } catch (err) {
        console.log("⚠️ Failed to install Tailwind CLI. Creating Tailwind config manually...");
      }
    }
  }

  // Ensure Tailwind config file exists
  if (!fs.existsSync("tailwind.config.js")) {
    fs.writeFileSync(
      "tailwind.config.js",
      `export default { content: ["./src/**/*.{js,ts,jsx,tsx}"], theme: { extend: {} }, plugins: [] };`
    );
  }

  // Ensure global styles exist
  if (!fs.existsSync("src/styles/globals.css")) {
    fs.mkdirSync("src/styles", { recursive: true });
    fs.writeFileSync("src/styles/globals.css", `@tailwind base;\n@tailwind components;\n@tailwind utilities;`);
  }

  console.log("✅ Tailwind CSS setup complete.");
}
