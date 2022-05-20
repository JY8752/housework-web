import { login, logout, selectUser } from 'src/slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from 'src/config/firebaseConfig';
import { useRouter } from 'next/router';

export const useAuthUser = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const relogin = useCallback(
    (authUser: User) => {
      dispatch(
        login({
          uid: authUser.uid,
          name: authUser.displayName || '',
          email: authUser.email || '',
        }),
      );
    },
    [dispatch],
  );

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (authUser) => {
      setIsLoading(true);
      if (authUser) {
        relogin(authUser);
        setIsLoading(false);
        router.push('/');
      } else {
        dispatch(logout());
        setIsLoading(false);
      }
    });
    return () => unsub();
  }, [dispatch, relogin, router]);

  return {
    user,
    isLoading,
    relogin,
  };
};
