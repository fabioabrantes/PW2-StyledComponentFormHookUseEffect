import {z} from 'zod';

export const schema = z.object({
  taskName: z.string().nonempty('campo nome tarefa obrigatório'),
  amountMinutes: z.number().min(5,{ message: "error tem que ser maior ou igual a que 5" }).max(60),
});
export type ITask = z.infer<typeof schema>;