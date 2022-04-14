// Libs
import React, { useContext, useEffect, useState } from 'react';
import { Select, Input, Button } from '@mantine/core';

// Custom components and functions
import { getConvertion } from '../../api/requests';
import { mainContext } from '../../context/context';

const Calculator = () => {
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');
  const [toCurrency2, setToCurrency2] = useState('');
  const [amount, setAmount] = useState('');
  const [result, setResult] = useState<any>(null);
  const [result2, setResult2] = useState<any>(null);
  const { data }: any = useContext(mainContext);

  const getRate = async () => {
    const res: any = await getConvertion(amount, fromCurrency, toCurrency);
    const res2: any = await getConvertion(amount, fromCurrency, toCurrency2);
    setResult(res.result)
    setResult2(res2.result)
  }

  useEffect(() => {
    if (toCurrency && toCurrency2 && fromCurrency && amount) {
      getRate()
    }
  },[toCurrency, toCurrency2, fromCurrency, amount])

  return (
    <div className='bg-white rounded-xl p-5 w-[400px] shadow-2xl' >
      <h3>Converter</h3>
      <div className='flex justify-around mt-5' >
        <div className='w-[100px]' >
          <div>From</div>
          <Select
            placeholder="$"
            data={data}
            onChange={(value: any) => setFromCurrency(value)}
          />
        </div>
        <div className='w-[100px]' >
          <div>To</div>
          <Select
            placeholder="$"
            data={data}
            onChange={(value: any) => setToCurrency(value)}
          />
        </div>

        <div className='w-[100px]' >
          <div>To</div>
          <Select
            placeholder="$"
            data={data}
            onChange={(value: any) => setToCurrency2(value)}
          />
        </div>
      </div>

      <div className='flex flex-col items-center' >
        <div className='mx-auto w-[340px] mt-5' >
          <h3>Amount {fromCurrency}</h3>
          <Input onChange={(e: any) => setAmount(e.target.value)} disabled={!fromCurrency && !toCurrency} variant="default" placeholder="amount" />
        </div>

        <div className='mx-auto w-[340px] mt-5' >
          <h3>Converted to {result?.rate ? `${toCurrency} (${fromCurrency} rate: ${result?.rate})` : ''} </h3>
          <Input value={result ? result[toCurrency] : ''} disabled={true} variant="default" placeholder="result" />
        </div>

        <div className='mx-auto w-[340px] mt-5' >
          <h3>Converted to {result2?.rate ? `${toCurrency2} (${fromCurrency} rate: ${result2?.rate})` : ''} </h3>
          <Input value={result2 ? result2[toCurrency2] : ''} disabled={true} variant="default" placeholder="result" />
        </div>

      </div>

    </div>
  );
};

export default Calculator;
