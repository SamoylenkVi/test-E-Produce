import { z as zod } from 'zod';
import { schemaRegistration } from './constants';

export type RegistrationFormValues = zod.infer<typeof schemaRegistration>;
