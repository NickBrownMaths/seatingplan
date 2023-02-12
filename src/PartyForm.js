import { useState } from 'react';
import { useForm } from 'react-hook-form';

function PartyForm(props) {

  const { register, handleSubmit } = useForm();

  const [formState0, setFormState0] = useState('');
  const [formState1, setFormState1] = useState('');
  const [formState2, setFormState2] = useState('');
  const [formState3, setFormState3] = useState('');

  return (
    <form className='Form' onSubmit={handleSubmit((data) => { props.setPartyTemp({ NAME: data.name, BUMS: +data.bums, KIDS: +data.kids, MEMB: data.memb }); setFormState0(''); setFormState1(''); setFormState2(''); setFormState3(''); })}>
      <input {...register('name')} onChange={(ev) => { setFormState0(ev.target.value) }} value={formState0} placeholder='Enter party name' className='FormInput' />
      <input {...register('bums')} onChange={(ev) => { setFormState1(ev.target.value) }} value={formState1} placeholder='# bums' className='FormInputSmall' type='number' />
      <input {...register('kids')} onChange={(ev) => { setFormState2(ev.target.value) }} value={formState2} placeholder='# kids' className='FormInputSmall' type='number' />
      <input {...register('memb')} onChange={(ev) => { setFormState3(ev.target.value) }} value={formState3} placeholder='Group members' className='FormInputLarge' />
      <input className='FormButton' type='submit' value='Add Party' />
    </form>
  )
}

export default PartyForm;