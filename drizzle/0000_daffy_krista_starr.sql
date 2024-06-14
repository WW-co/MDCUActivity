CREATE TABLE IF NOT EXISTS "Activities" (
	"id" serial PRIMARY KEY NOT NULL,
	"actName" text,
	"actDetail" varchar(256),
	"department" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "UsersActivities" (
	"id" serial PRIMARY KEY NOT NULL,
	"userID" text,
	"activityID" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Users" (
	"id" serial PRIMARY KEY NOT NULL,
	"Name" text,
	"Contact" varchar(256)
);
