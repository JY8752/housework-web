import React from 'react';
import { IconContext } from 'react-icons';
import { BiUserCircle } from 'react-icons/bi';
import { MdLogout } from 'react-icons/md';
import { useAuthUser } from 'src/hooks/useAuthUser';
import { useFirebaseAuth } from 'src/hooks/useFirebaseAuth';

export const Header = () => {
  const { user } = useAuthUser();
  const { logout } = useFirebaseAuth();

  const clickHandler = async () => {
    await logout();
  };

  return (
    <div className="flex theme-blue h-28 items-center justify-between pl-3">
      <div>
        <div className="text-white text-4xl">House Work</div>
        <div className="text-white text-4xl">Management</div>
      </div>
      <div className="flex p-3 items-center">
        <IconContext.Provider value={{ size: '40px' }}>
          <BiUserCircle />
        </IconContext.Provider>
        <div className="p-3 font-semibold">{user.name}</div>
        <IconContext.Provider value={{ size: '30px' }}>
          <MdLogout
            className="hover:opacity-40 hover:cursor-pointer"
            onClick={clickHandler}
          />
        </IconContext.Provider>
      </div>
    </div>
  );
};
