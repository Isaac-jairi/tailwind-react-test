import { INavMobileContext } from 'interfaces';
import React, { createContext, useState, useContext } from 'react';

const NavMobileContext = createContext<INavMobileContext>(null!);

export function NavMobileProvider({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <NavMobileContext.Provider value={{ isVisible, setIsVisible }}>
      {children}
    </NavMobileContext.Provider>
  );
}
export function useNavMobileContext() {
  return useContext(NavMobileContext);
}
