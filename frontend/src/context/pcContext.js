import { createContext } from 'react';

const pcContext = createContext(null);

export const PCInstanceProvider = pcContext.Provider;

export default pcContext;
