# This is a starter project kit - Master Starter

## for App Router (src/app)
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

## For Page Router (pages/)
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
