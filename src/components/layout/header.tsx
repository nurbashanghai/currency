import React, { useEffect, useState } from 'react';
import { getCurrencyRate } from '../api/requests';

const Header = () => {
  const [currencyRate, setCurrencyRate] = useState<any>({})

  const getUsdEurorate = async () => {
    const usdData: any = await getCurrencyRate('USD', ['UAH'])
    const eurData: any = await getCurrencyRate('EUR', ['UAH'])

    setCurrencyRate({
      USD_TO_UAH: usdData.results.UAH,
      EUR_TO_UAH: eurData.results.UAH
    })
  }

  useEffect(() => {
    getUsdEurorate()
  },[])

  return (
    <div className='rounded-xl bg-white shadow-2xl w-full h-auto p-3' >
      <div className='ml-5' >
        <div className='flex justify-around' >
         <span> USD($) to UAH(₴) = {currencyRate?.USD_TO_UAH ? `${currencyRate.USD_TO_UAH} $` : 'loading...'} </span>
         <span> EURO(€) to UAH(₴) = {currencyRate?.EUR_TO_UAH ? `${currencyRate.EUR_TO_UAH} $` : 'loading...'} </span>
        </div>
      </div>
    </div>
  );
};

export default Header;