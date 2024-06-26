import { int } from "drizzle-orm/mysql-core";
import { integer, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const activity = pgTable('Activities', {
  id: serial('id').primaryKey(),
  actName: text('actName'),
  actDetail: varchar('actDetail', { length: 256 }),
  department: text('department'),
});

export const users = pgTable('Users', {
  id: serial('id').primaryKey(),
  name: text('Name'),
  contact: varchar('Contact', { length: 256 }),
});

export const enrollment = pgTable('UsersActivities', {
  id: serial('id').primaryKey(),
  userId: text('userID'),
  activityId: text('activityID'),
});





/*
import { index, int, mysqlTable, bigint, varchar } from 'drizzle-orm/mysql-core';

export const users = mysqlTable('users', {
  id: bigint('id', { mode: 'number' }).primaryKey().autoincrement(),
  fullName: varchar('full_name', { length: 256 }),
}, (users) => ({
  nameIdx: index('name_idx').on(users.fullName),
}));

export const authOtps = mysqlTable('auth_otp', {
  id: bigint('id', { mode: 'number' }).primaryKey().autoincrement(),
  phone: varchar('phone', { length: 256 }),
  userId: int('user_id').references(() => users.id),
});
*/
