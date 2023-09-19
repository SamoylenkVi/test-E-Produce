import { z as zod } from 'zod';

export const schemaRegistration = zod.object({
  name: zod.string(),
  login: zod.string(),
  phone: zod.string(),
  rules1: zod.boolean(),
});
