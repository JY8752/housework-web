import { useRouter } from 'next/router';
import { createContext, ReactNode, useEffect } from 'react';
import { User } from 'src/types/types';
import { TailSpin } from 'react-loader-spinner';
import { useAuthUser } from 'src/hooks/useAuthUser';
import { useFirebaseAuth } from 'src/hooks/useFirebaseAuth';

type Props = {
  children: ReactNode;
};

export const AuthContext = createContext<User | undefined>(undefined);

export const AuthProvider = (props: Props) => {
  const { user } = useAuthUser();
  const { getCurrentUser } = useFirebaseAuth();
  const router = useRouter();

  useEffect(() => {
    if (
      !getCurrentUser() &&
      router.pathname !== '/login' &&
      router.pathname !== '/loading'
    ) {
      router.push('/login');
    }
  }, [router, getCurrentUser]);

  if (
    !getCurrentUser &&
    router.pathname !== '/login' &&
    router.pathname !== '/loading'
  ) {
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <TailSpin color="#00BFFF" height={150} width={150} />
      </div>
    );
  }

  return (
    <AuthContext.Provider value={user}>{props.children}</AuthContext.Provider>
  );
};
