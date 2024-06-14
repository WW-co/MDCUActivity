CREATE TABLE IF NOT EXISTS "Users_Activities" (
	"id" serial PRIMARY KEY NOT NULL,
	"userID" integer,
	"activityID" integer
);
