import React, { useContext } from 'react';
import { mainContext } from '../context/context';


const Sidebar = () => {
  const { data }: any = useContext(mainContext);
  return (
    <div className='bg-[rgb(88,64,186)] h-[80vh] w-[15vw] rounded-3xl shadow-2xl drop-shadow-2xl' >
      <div className='text-white p-11 h-[600px]' >
        <h5>Currency screener</h5>
        1 USD to
        <div className='h-full overflow-y-auto mt-5' >
          { data.length && data.map((item: any) => {
            console.log(item)
            return <div key={item.label} > {item.label} = {item.rate} </div>
          }) }
        </div>
      </div>
    </div>
  );
};

export default Sidebar;