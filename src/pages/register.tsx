import React, { ReactElement, useState } from 'react';
import { HouseWork, NextPageWithLayout } from 'src/types/types';
import { Layout } from 'src/components/Layout';

const Register: NextPageWithLayout = () => {
  const [houseWorkList, setHouseWorkList] = useState<HouseWork[]>([]);
  return (
    <div className="p-20">
      <div
        className="theme-blue3 rounded shadow-lg p-3"
        style={{ height: '1000px' }}
      >
        <div className="font-semibold text-4xl text-center border-b pb-5 border-stone-700">
          新規登録
        </div>
        <div className="grid grid-cols-2">
          <div className="col-span-1 text-center font-semibold">名称</div>
          <div className="col-span-1 text-center font-semibold">得点</div>
          {houseWorkList.length === 0 && (
            <>
              <div className="col-span-1 p-3">
                <input type="text" className="block w-full rounded p-2" />
              </div>
              <div className="col-span-1 p-3">
                <input type="text" className="block w-full rounded p-2" />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

Register.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Register;
