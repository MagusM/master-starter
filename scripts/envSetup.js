import fs from "fs";

export function setupEnvFile(database, orm) {
  console.log("🛠 Creating .env.local...");
  let envContent = "NEXT_PUBLIC_API_URL=\n";

  if (database === "sql") {
    envContent += "DATABASE_URL=\n";
    if (orm === "prisma") envContent += "PRISMA_CLIENT_ENGINE_TYPE=library\n";
  } else {
    envContent += "MONGO_URI=\n";
  }

  fs.writeFileSync(".env.local", envContent);
}
