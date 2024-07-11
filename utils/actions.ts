

'use server';
import { readFile, writeFile } from 'fs/promises';
import { revalidatePath } from 'next/cache';



type User ={
    id:string;
    firstName:string;
    lastName:string;
}

export const createUser = async(prevState:any, formData: FormData) => {
    'use server';
    console.log(prevState);
    // adding a delay to see value submisson
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const newUser:User = {firstName,lastName,id: Date.now().toString()};

    // graceful error handling on the frntend instaed of creashing the application
    try{
        await saveUser(newUser);
        // revalidatePath('/actions'); 
        return 'user created successfully...'

    }catch(error) {
        console.log(error);
        return 'failed to create a user...'
    }
    // redirect('/');

    // // teh revalidate path here ensures that the username appers instantly on teh screen
    revalidatePath('/actions'); 


};


// backend logic to save the user in my file but do ntot want to overwrite the exiting user data so want to fetch the user first

export const fetchUsers = async (): Promise<User[]> => {
    const result = await readFile('users.json', { encoding: 'utf8' });
    const users = result ? JSON.parse(result) : [];
    return users;
  };


export const saveUser = async (user:User) => {
    const users = await fetchUsers();
    users.push(user);
    await writeFile('users.json', JSON.stringify(users));
};

// if the user matches then we retrun it but ifit doesnt match we remve it from the list and update the 
export const deleteUser = async (formData: FormData) => {
    const id = formData.get('id') as string;
    const users = await fetchUsers();
    // only want tot return the type where the uuser id doesn not match the type
    const updatedUsers = users.filter((user) => user.id !== id);
    await writeFile('users.json', JSON.stringify(updatedUsers));
    revalidatePath('/actions');
};
// export const removeUser = async (id:string, formData: FormData) => {
//     const name = formData.get('name') as string;
//     console.log(name);

// };
// this enables to hide user id from the html

export const removeUser = async (id: string, formData: FormData) => {
    const name = formData.get('name') as string;
    console.log(name);
  
    const users = await fetchUsers();
    const updatedUsers = users.filter((user) => user.id !== id);
    await writeFile('users.json', JSON.stringify(updatedUsers));
    revalidatePath('/actions');
  };