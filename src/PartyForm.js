import { useForm } from 'react-hook-form';

function PartyForm(props) {

  const { register, handleSubmit } = useForm();

  return (
    <form className='Form' onSubmit={handleSubmit ((data) => {props.setPartyTemp({NAME: data.name, BUMS: data.bums, KIDS: data.kids, })})}>
      <input {...register('name')} placeholder='Enter party name' className='FormInput' />
      <input {...register('bums')} placeholder='# bums' className='FormInputSmall' type='number'/>
      <input {...register('kids')} placeholder='# kids' className='FormInputSmall' type='number'/>
      <input className='FormButton' type='submit' value='Add Party' />
    </form>
  )
}

export default PartyForm;