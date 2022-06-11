import React from 'react';
import { useAuth, useFirestore, useFirestoreCollection } from 'reactfire';
import ResponsiveAppBar from '../AppBar';
import Navbar from './NavbarMy';

const Home: React.FC = () => {
  // const auth = useAuth();
  const itemsRef = useFirestore().collection('items');
  // const { data, status } = useFirestoreCollection(itemsRef);

  // const doAddItems = async () => {
  //   try {
  //     await itemsRef.doc().set({ name: new Date().getTime() });
  //   } catch (err) {
  //     alert(`ERROR while adding`);
  //   }
  // };

  // const doDeleteItem = async (id: string) => {
  //   try {
  //     await itemsRef.doc(id).delete();
  //   } catch (err) {
  //     alert('ERROR while deleting');
  //   }
  // };

  return (
    <div style={{ minWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <ResponsiveAppBar />
      {/* <h1>{auth.currentUser?.email}</h1>
      <button
        type="button"
        onClick={() => auth.signOut()}
        style={{ margin: 12 }}
      >
        LOGOUT
      </button>

      <div>
        <button
          type="button"
          onClick={async () => doAddItems()}
          style={{ margin: 12 }}
        >
          Add item
        </button>
        <>
          {status === 'loading' ? <>IS LOADING</> : null}
          {data?.docs?.map((d) => (
            <p key={d.id}>
              <button type="button" onClick={() => doDeleteItem(d.id)}>
                DEL
              </button>
              <span>
                {'   '}
                {d.id} - {d.data().name}
              </span>
            </p>
          ))}
        </>
      </div> */}
    </div>
  );
};

export default Home;
