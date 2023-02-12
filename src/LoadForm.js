import { useForm } from 'react-hook-form';

function LoadForm(props) {

  const { register, handleSubmit } = useForm();

  return (
    <form className='Form' onSubmit={handleSubmit((data) => { props.setLoadData(data.loadData) })}>
      <input {...register('loadData')} placeholder={'Enter your saved data'} className='FormInput' />
      <input className='FormButton' type='submit' value='Load Session' />
    </form>
  )
}

export default LoadForm;