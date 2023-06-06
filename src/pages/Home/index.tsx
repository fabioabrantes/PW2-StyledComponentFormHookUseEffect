import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import { Play } from 'phosphor-react';

import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from './styles';

import {ITask,schema} from '../../util/validationZod';

export function Home() {
  
  
  const {register, handleSubmit,watch, formState: { errors }} = useForm({
    defaultValues:{
      taskName:'',
      amountMinutes:0
    },
    resolver:zodResolver(schema)
  })
  console.log(errors.taskName);
  function handleCreateNewCycle(data: ITask) {
    console.log(data);
  }
 const nameTask = watch('taskName');
  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            {...register('taskName')}
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"
          />
          
          <datalist id="task-suggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
            <option value="Banana" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
          {...register('amountMinutes')}
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
          />
          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton disabled={!!nameTask} type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
        {errors.taskName && <strong style={{color:'#fff'}}>{errors.taskName.message}</strong>}
      </form>
     
    </HomeContainer>
  )
}