export const envs = {
  PORT: parseInt(process.env.PORT ?? "0"),
  MONGO_DB_NAME: process.env.MONGO_DB_NAME ?? "",
  MONGO_URL: process.env.MONGO_URL ?? "",
};
