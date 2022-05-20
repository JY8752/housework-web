import { NextPage } from 'next';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { IconContext } from 'react-icons';
import { useFirebaseAuth } from '../hooks/useFirebaseAuth';
import { useAuthUser } from 'src/hooks/useAuthUser';
import { useRouter } from 'next/router';

const Login: NextPage = () => {
  const { getCurrentUser, authError } = useFirebaseAuth();
  const { relogin } = useAuthUser();
  const router = useRouter();

  const clickHandler = async () => {
    const currentUser = getCurrentUser();
    if (currentUser) {
      relogin(currentUser);
      router.push('/');
    } else {
      router.push('/loading');
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <div className="text-white text-7xl text-center">
        <div>House Work</div>
        <div>Management</div>
      </div>
      <div className="mt-10 flex items-center">
        <IconContext.Provider value={{ size: '50px' }}>
          <FcGoogle />
        </IconContext.Provider>
        <button
          className="bg-blue-700 rounded p-3 text-white hover:bg-blue-800"
          onClick={clickHandler}
        >
          Googleでログインする
        </button>
        {authError && <div>{authError}</div>}
      </div>
    </div>
  );
};

export default Login;
