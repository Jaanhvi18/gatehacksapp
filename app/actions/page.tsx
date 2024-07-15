import dynamic from 'next/dynamic';

//  import the Form component with no SSR
const Form = dynamic(() => import('../_components/Form'), { ssr: false });

function ActionsPage() {
  return (
    <>
      <Form />
      {/* <UsersList /> */}
    </>
  );
}

export default ActionsPage;
