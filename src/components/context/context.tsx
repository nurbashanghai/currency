import React, { useReducer, useEffect } from 'react';
import { getAllCurrencyData } from '../api/requests';

export const mainContext = React.createContext({});

const INIT_STATE = {
  data: []
};

const reducer = (state = INIT_STATE, action: { type: string, payload: any }) => {
  switch (action.type) {
    case 'SET_DATA_TO_STORE':
      return {
        ...state,
        data: action.payload
      };
    default: return state
  }
};

const MainContext = ({ children }: any) => {
  let [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getAllCurrency = async () => {
    const res: any = await getAllCurrencyData()
    const arr = []
    for (let key in res.results) {
      arr.push({
        label: key,
        value: key,
        rate: res.results[key]
      })
    }
    dispatch({
      type: 'SET_DATA_TO_STORE',
      payload: arr
    })
  }

  useEffect(() => {
    getAllCurrency()
  }, [])

  return (
    <mainContext.Provider
      value={{
        data: state.data
      }}
    >
      {children}
    </mainContext.Provider>
  );
};

export default MainContext;