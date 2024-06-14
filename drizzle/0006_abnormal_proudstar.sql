CREATE TABLE IF NOT EXISTS "UsersActivities" (
	"id" serial PRIMARY KEY NOT NULL,
	"userID" integer,
	"activityID" integer
);
