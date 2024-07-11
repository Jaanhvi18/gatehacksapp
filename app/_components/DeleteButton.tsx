
import { removeUser } from '@/utils/actions';
function DeleteButton({id}:{id:string}) {
    // the use of the bind method is to ensure that the user id cannot be viewed from the webpage source code 
    // ie the removeUserid is to avoid pagge the user.id on teh html
    const removeUserWithID = removeUser.bind(null,id);
  return( 
  <form action={removeUserWithID}>
    <input type='hidden' name='name' value='shakeAndBake' />
    <button type='submit' className='bg-red-500 text-white text-xs rounded p-2'>
    delete
    </button>
</form>
);
}
export default DeleteButton;