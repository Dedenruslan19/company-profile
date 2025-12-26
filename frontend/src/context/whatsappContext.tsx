import React, { createContext, useContext, useState } from 'react';

type WhatsappContextType = {
  visible: boolean;
  setVisible: (v: boolean) => void;
};

const WhatsappContext = createContext<WhatsappContextType | undefined>(undefined);

export const WhatsappProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [visible, setVisible] = useState(true);
  return (
    <WhatsappContext.Provider value={{ visible, setVisible }}>
      {children}
    </WhatsappContext.Provider>
  );
};

export const useWhatsapp = () => {
  const ctx = useContext(WhatsappContext);
  if (!ctx) throw new Error('useWhatsapp must be used within WhatsappProvider');
  return ctx;
};
