ALTER TABLE "users" RENAME TO "Activities";--> statement-breakpoint
ALTER TABLE "Activities" RENAME COLUMN "full_name" TO "Activities";--> statement-breakpoint
ALTER TABLE "Activities" RENAME COLUMN "phone" TO "Details";--> statement-breakpoint
ALTER TABLE "Activities" ADD COLUMN "Department" text;