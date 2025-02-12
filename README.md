# 🚀 Master Starter - Next.js Starter Project Kit

A **state-of-the-art** starter kit for **Next.js** projects, supporting both **App Router** and **Page Router**, with a clean structure, best practices, and essential utilities.

---

## 📦 **Project Structure**
This kit provides **two different folder structures** based on your **routing choice**:

### **🔹 For App Router (`src/app/`)**
```bash
my-project/
│── src/
│   ├── app/
│   │   ├── layout.tsx         # Global layout
│   │   ├── page.tsx           # Home page
│   │   ├── api/
│   │   │   ├── users/route.ts # Example API route
│   ├── components/
│   │   ├── Navbar.tsx         # Example UI component
│   │   ├── Footer.tsx
│   ├── utils/
│   │   ├── helpers.ts         # Utility functions
│   ├── actions/
│   │   ├── userActions.ts     # Example server action
│   ├── lib/
│   │   ├── db.ts              # Database connection
│   ├── hooks/
│   │   ├── useAuth.ts         # Custom hook example
│   ├── styles/
│   │   ├── globals.css        # Tailwind or global styles
│── prisma/ or db/ (if SQL)
│── models/ (if Mongo)
│── public/
│── .env.local                 # Basic environment variables
│── README.md                   # Cleaned starter guide
│── package.json
│── next.config.js
```
### **🔹 For Page Router (`pages/`)**
```bash
my-project/
│── pages/
│   ├── index.tsx             # Home page
│   ├── api/
│   │   ├── users.ts          # Example API route
│── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   ├── utils/
│   │   ├── helpers.ts
│   ├── actions/
│   │   ├── userActions.ts
│   ├── lib/
│   │   ├── db.ts
│   ├── hooks/
│   │   ├── useAuth.ts
│   ├── styles/
│   │   ├── globals.css
│── prisma/ or db/ (if SQL)
│── models/ (if Mongo)
│── public/
│── .env.local
│── README.md
│── package.json
│── next.config.js
```
---

## 🛠️ **Features**
✅ **Supports both App Router (`src/app`) and Page Router (`pages/`)**  
✅ **Includes database setup** (SQL with Drizzle/Prisma, or MongoDB with Mongoose)  
✅ **Auto-installs dependencies** (TailwindCSS, Clerk, Framer Motion, ShadCN, etc.)  
✅ **Pre-configured `.env.local` file** for environment variables  
✅ **Best practice folder structure** for **components, utils, actions, hooks, and styles**  
✅ **Auto-cleans default Next.js files** to maintain a clean setup  
✅ **Easy setup and configuration** via CLI

---

## 🚀 **Installation**
### **1️⃣ Clone this repo**
```sh
git clone https://github.com/YOUR_GITHUB_USERNAME/master-starter.git
cd master-starter
---

## 🛠️ **Features**
✅ **Supports both App Router (`src/app`) and Page Router (`pages/`)**  
✅ **Includes database setup** (SQL with Drizzle/Prisma, or MongoDB with Mongoose)  
✅ **Auto-installs dependencies** (TailwindCSS, Clerk, Framer Motion, ShadCN, etc.)  
✅ **Pre-configured `.env.local` file** for environment variables  
✅ **Best practice folder structure** for **components, utils, actions, hooks, and styles**  
✅ **Auto-cleans default Next.js files** to maintain a clean setup  
✅ **Easy setup and configuration** via CLI  

---

## 🚀 **Installation**
### **1️⃣ Clone this repo**

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/master-starter.git
cd master-starter
bun run create my-new-project (or equivalent)
cd my-new-project
bun run dev  # or npm run dev / yarn run dev / pnpm run dev
```
