import { useForm } from 'react-hook-form';

function TableForm(props) {

  const { register, handleSubmit } = useForm();

  return (
    <form className='Form' onSubmit={handleSubmit((data) => { props.setTableTemp({NAME: data.tableName, BUMS: 0, KIDS: 0, }) })}>
      <input {...register('tableName')} placeholder={props.placeholder} className='FormInput' />
      <input className='FormButton' type='submit' value='Add' />
    </form>
  )
}

export default TableForm;