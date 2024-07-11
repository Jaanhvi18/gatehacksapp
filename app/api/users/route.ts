import { fetchUsers, saveUser } from '@/utils/actions';

// export const GET = async (req: Request) =>{
//     // use this request to acccess URL query parameters
//     const {searchParams} = new URL(req.url);
//     const id = searchParams.get('id');
//     console.log(id);
//     // console.log(req);
    
//     // fetch the users and include them in my json response object
//     const users = await fetchUsers();
//     return Response.json({users});

// };


// does the exact same thinsg as the code above 
// next server and next req wrap around the Web API and are useful for additional logic
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest) => {
  console.log(request.url);
  console.log(request.nextUrl.searchParams.get('id'));

  const users = await fetchUsers();
  return NextResponse.redirect(new URL('/', request.url));
};

export const POST = async (request:Request) => {
    const user = await request.json();
    const newUser = {...user, id:Date.now().toString()};
    await saveUser(newUser);
    return Response.json({msg: 'user created'});


};