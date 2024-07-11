
'use client';

import { createUser } from '@/utils/actions';
import { useFormState, useFormStatus } from 'react-dom';


const SubmitButton = () =>{
  const {pending} = useFormStatus()
  return (
    <button type="submit" className={btnStyle} disabled = {pending}>
    {pending ?'submitting...': 'submit'}
  </button>
  );

};


function Form() {
  // use form state to display the success or error message of creating a new user
  const [message, formAction] = useFormState(createUser, null);
  return (
    <form action={formAction} className={formStyle}>
      {message && <p>{message}</p>}
      <h2 className="text-2xl capitalize mb-4">Create User</h2>
      
      <label htmlFor="firstName" className="sr-only">First Name</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        required
        className={inputStyle}
        defaultValue=""
        placeholder="First Name"
      />
      
      <label htmlFor="lastName" className="sr-only">Last Name</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        required
        className={inputStyle}
        defaultValue=""
        placeholder="Last Name"
      />
      <SubmitButton />
    </form>
  );
}

const formStyle = 'max-w-lg flex flex-col gap-y-4 shadow rounded p-8';
const inputStyle = 'border shadow rounded py-2 px-3 text-gray-700';
const btnStyle = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded capitalize';

export default Form;