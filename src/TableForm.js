import { useState } from 'react';
import { useForm } from 'react-hook-form';

function TableForm(props) {

  const { register, handleSubmit } = useForm();

  const [formState, setFormState] = useState('');

  return (
    <form className='Form' onSubmit={handleSubmit((data) => { props.setTableTemp({ NAME: data.tableName, BUMS: 0, KIDS: 0, PARTIES: [] }); setFormState(''); })}>
      <input {...register('tableName')} placeholder={'Enter table name'} value={formState} className='FormInput' onChange={(ev) => {setFormState(ev.target.value)}}/>
      <input className='FormButton' type='submit' value='Add Table' />
    </form>
  )
}

export default TableForm;