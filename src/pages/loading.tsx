import { NextPage } from 'next';
import { useEffect } from 'react';
import { TailSpin } from 'react-loader-spinner';
import { useFirebaseAuth } from 'src/hooks/useFirebaseAuth';

const Loading: NextPage = () => {
  const { loginByGoogle, getCurrentUser } = useFirebaseAuth();
  useEffect(() => {
    setTimeout(() => {
      if (!getCurrentUser()) {
        loginByGoogle();
      }
    }, 2000);
  }, [loginByGoogle, getCurrentUser]);
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <TailSpin color="#00BFFF" height={150} width={150} />
    </div>
  );
};

export default Loading;
