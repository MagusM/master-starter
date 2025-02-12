import { execSync } from "child_process";

export function installDependencies(response) {
  const dependencies = [];
  if (response.database === "sql") {
    dependencies.push(response.orm === "prisma" ? "prisma @prisma/client" : "drizzle-orm postgres");
  } else {
    dependencies.push("mongoose");
  }
  if (response.tailwind) dependencies.push("tailwindcss postcss autoprefixer");
  if (response.framerMotion) dependencies.push("framer-motion");
  if (response.clerk) dependencies.push("@clerk/nextjs");
  if (response.shadcn) dependencies.push("@shadcn/ui");

  if (dependencies.length > 0) {
    console.log("📦 Installing dependencies...");
    execSync(`${response.packageManager} add ${dependencies.join(" ")}`, { stdio: "inherit" });
  }
}
