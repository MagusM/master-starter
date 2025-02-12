import fs from "fs";

export function createFolderStructure(router) {
  console.log("📁 Setting up best-practice folder structure...");

  // ✅ Base folders included in both App Router & Page Router setups
  const baseFolders = [
    "src/components", // UI components
    "src/utils", // Helper functions
    "src/actions", // Server actions
    "src/lib", // Database & utilities
    "src/hooks", // Custom hooks
    "src/styles", // Global styles
  ];
  baseFolders.forEach((folder) => fs.mkdirSync(folder, { recursive: true }));

  // ✅ App Router Setup
  if (router === "app") {
    fs.mkdirSync("src/app", { recursive: true });

    // Layout & main page
    fs.writeFileSync(
      "src/app/layout.tsx",
      `export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }`
    );
    fs.writeFileSync("src/app/page.tsx", "export default function Page() { return <h1>Home</h1>; }");

    // API Route Example (App Router)
    fs.mkdirSync("src/app/api", { recursive: true });
    fs.mkdirSync("src/app/api/users", { recursive: true });
    fs.writeFileSync(
      "src/app/api/users/route.ts",
      `import { NextResponse } from "next/server";
import { createApiResponse } from "@/utils/apiResponse";

export async function GET() {
  try {
    const user = { id: 1, name: "John Doe" }; // Example fetched user
    return NextResponse.json(createApiResponse({ data: user, message: "User fetched successfully" }));
  } catch (error) {
    return NextResponse.json(createApiResponse({ error: "Database error", status: 500 }));
  }
}`
    );
  } else {
    // ✅ Page Router Setup
    fs.mkdirSync("pages", { recursive: true });

    // Main page
    fs.writeFileSync("pages/index.tsx", "export default function Home() { return <h1>Home</h1>; }");

    // API Route Example (Page Router)
    fs.mkdirSync("pages/api", { recursive: true });
    fs.writeFileSync(
      "pages/api/users.ts",
      `import { NextApiRequest, NextApiResponse } from "next";
import { createApiResponse } from "@/utils/apiResponse";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const user = { id: 1, name: "John Doe" };
    res.status(200).json(createApiResponse({ data: user, message: "User fetched successfully" }));
  } catch (error) {
    res.status(500).json(createApiResponse({ error: "Database error", status: 500 }));
  }
}`
    );
  }

  // ✅ Default Components
  fs.writeFileSync(
    "src/components/Navbar.tsx",
    `export default function Navbar() { return <nav><h1>Navbar</h1></nav>; }`
  );
  fs.writeFileSync(
    "src/components/Footer.tsx",
    `export default function Footer() { return <footer><p>Footer</p></footer>; }`
  );

  // ✅ Default Utilities
  fs.writeFileSync(
    "src/utils/helpers.ts",
    `export function formatDate(date: Date) { return date.toISOString().split('T')[0]; }`
  );

  // ✅ API Response Utility (NEW)
  fs.writeFileSync(
    "src/utils/apiResponse.ts",
    `import { HttpStatusCode } from "axios";

/**
 * Standard API response structure
 */
export interface ApiResponse<TData = unknown, TError = unknown, TEData = unknown> {
  status: HttpStatusCode;
  success: boolean;
  message?: string;
  data?: TData;
  error?: TError;
  additionalInfo?: TEData;
}

/**
 * Helper function to create a consistent API response format
 */
export const createApiResponse = <TData, TError = unknown, TEData = unknown>({
  data,
  error,
  status,
  message,
  additionalInfo,
}: {
  data?: TData;
  error?: TError;
  status?: HttpStatusCode;
  message?: string;
  additionalInfo?: TEData;
}): ApiResponse<TData, TError, TEData> => {
  const _status: HttpStatusCode = status || (error ? HttpStatusCode.InternalServerError : HttpStatusCode.Ok);
  const success = _status >= 200 && _status < 300;

  return {
    status: _status,
    success,
    data,
    error,
    message: message || (success ? "Request successful" : "An error occurred"),
    additionalInfo,
  };
};`
  );

  // ✅ Default Server Actions (for App Router)
  fs.writeFileSync(
    "src/actions/userActions.ts",
    `export async function getUserData() { return { name: "John Doe", email: "john@example.com" }; }`
  );

  // ✅ Database Connection
  fs.writeFileSync(
    "src/lib/db.ts",
    `import { PrismaClient } from "@prisma/client";\nexport const db = new PrismaClient();`
  );

  // ✅ Default Custom Hooks
  fs.writeFileSync(
    "src/hooks/useAuth.ts",
    `import { useState } from "react";\nexport function useAuth() { const [user, setUser] = useState(null); return { user, setUser }; }`
  );

  // ✅ Global Styles
  fs.writeFileSync("src/styles/globals.css", `body { font-family: sans-serif; margin: 0; padding: 0; }`);

  console.log("✅ Folder structure successfully set up.");
}
