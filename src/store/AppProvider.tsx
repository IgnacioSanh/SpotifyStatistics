import React, { useContext, createContext, PropsWithChildren } from 'react';

import { AppStoreContext } from '~types';

const appContext = createContext<AppStoreContext>({
  userIsLogged: false,
});

export default function AppProvider({ children }: PropsWithChildren) {
  return (
    <appContext.Provider value={{ userIsLogged: false }}>
      {children}
    </appContext.Provider>
  );
}

export const useAppContext = () => {
  const context = useContext(appContext);
  if (context === undefined) {
    throw new Error('Context must be used within an App provider');
  }
  return context;
};
