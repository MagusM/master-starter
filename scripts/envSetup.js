import fs from "fs";

export function setupEnvFile(database, orm) {
  console.log("🛠 Creating .env.local...");

  let envContent = `# 🚀 Production-Ready Environment Variables
# ==========================================
# Update these values according to your production needs.

# 🌍 General
NODE_ENV=development  # Options: development | production | test
NEXT_PUBLIC_API_URL=
PORT=3000  # Change this based on your server needs
NEXT_PUBLIC_APP_NAME=Master Starter
NEXT_PUBLIC_APP_VERSION=1.0.0

# ================================
# 🔹 Database Configuration
# ================================
`;

  if (database === "sql") {
    envContent += `DATABASE_URL=  # Example: postgresql://user:password@host:port/dbname\n`;
    if (orm === "prisma") {
      envContent += `PRISMA_CLIENT_ENGINE_TYPE=library\n`;
      envContent += `PRISMA_LOG_LEVEL=warn  # Log levels: info, query, warn, error\n`;
    }
  } else {
    envContent += `MONGO_URI=  # Example: mongodb+srv://user:password@cluster.mongodb.net/dbname\n`;
  }

  envContent += `\n# ================================
# 🔹 Authentication & Authorization
# ================================
NEXT_PUBLIC_CLERK_FRONTEND_API=
CLERK_API_KEY=
CLERK_JWT_SECRET=

NEXTAUTH_URL=  # Example: https://yourapp.com
NEXTAUTH_SECRET=

JWT_SECRET=
JWT_EXPIRES_IN=3600  # Expiry in seconds (1 hour)
ENCRYPTION_KEY=  # 32-char secret for encryption

# ================================
# 🔹 AI Services
# ================================
OPENAI_API_KEY=
GOOGLE_AI_API_KEY=
MICROSOFT_AZURE_AI_KEY=
ANTHROPIC_CLAUDE_API_KEY=

# ================================
# 🔹 OAuth & Social Logins
# ================================
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=

FACEBOOK_CLIENT_ID=
FACEBOOK_CLIENT_SECRET=

TWITTER_CLIENT_ID=
TWITTER_CLIENT_SECRET=

MICROSOFT_CLIENT_ID=
MICROSOFT_CLIENT_SECRET=

# ================================
# 🔹 Payments & Billing (Stripe, PayPal, etc.)
# ================================
STRIPE_SECRET_KEY=
STRIPE_PUBLIC_KEY=
STRIPE_WEBHOOK_SECRET=

PAYPAL_CLIENT_ID=
PAYPAL_CLIENT_SECRET=

# ================================
# 🔹 Storage & File Uploads
# ================================
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_REGION=
AWS_S3_BUCKET_NAME=

GOOGLE_CLOUD_STORAGE_BUCKET=
GOOGLE_CLOUD_KEYFILE_JSON_PATH=

# ================================
# 🔹 Email Services
# ================================
SENDGRID_API_KEY=
MAILGUN_API_KEY=
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASSWORD=

# ================================
# 🔹 Caching & Sessions
# ================================
REDIS_URL=  # Example: redis://user:password@host:port
SESSION_SECRET=
SESSION_TTL=86400  # Session expiry in seconds (1 day)

# ================================
# 🔹 Logging & Monitoring
# ================================
SENTRY_DSN=  # For error tracking
LOG_LEVEL=info  # Levels: debug, info, warn, error
DATADOG_API_KEY=
NEW_RELIC_LICENSE_KEY=

# ================================
# 🔹 CDN & Asset Optimization
# ================================
CLOUDFLARE_API_KEY=
CLOUDFLARE_ZONE_ID=
IMGPROXY_SECRET_KEY=
IMGPROXY_SALT=

# ================================
# 🔹 Feature Flags & A/B Testing
# ================================
FEATURE_FLAG_EXPERIMENTAL_UI=true
FEATURE_FLAG_ENABLE_CHATBOT=false
AB_TESTING_VARIANT=A  # Options: A | B | Control

# ================================
# 🔹 Performance & Rate Limiting
# ================================
CACHE_TTL=3600  # Time-to-live for cache (in seconds)
RATE_LIMIT_REQUESTS=100  # Max requests per minute
RATE_LIMIT_WINDOW=60  # Time window in seconds

# ================================
# 🔹 Miscellaneous
# ================================
TIMEZONE=UTC
ENABLE_DEBUG_MODE=false
MAINTENANCE_MODE=false
`;

  fs.writeFileSync(".env.local", envContent);
}
