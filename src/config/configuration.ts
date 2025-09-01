import * as Joi from "joi";

export default () => ({
  port: Number(process.env.PORT) || 3005,
  nodeEnv: process.env.NODE_ENV || "development",
  database: {
    url: process.env.DATABASE_URL,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
});

export const validationSchema = Joi.object({
  PORT: Joi.number().default(3005),
  NODE_ENV: Joi.string()
    .valid("development", "production", "test")
    .default("development"),
  DATABASE_URL: Joi.string().uri().required(),
  JWT_SECRET: Joi.string().required(),
});
