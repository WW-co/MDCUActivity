import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/db/schema.ts',
  out: './drizzle',
  dialect: 'postgresql', // 'postgresql' | 'mysql' | 'sqlite'
  dbCredentials: {
    url: process.env.DIRECT_URL
  },
});
