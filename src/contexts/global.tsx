import { useState, createContext } from "react";

export interface GlobalLoadingType {
    loading: boolean,
    setLoading?: React.Dispatch<boolean>,
}

export interface GlobalProviderType {
    value?: GlobalLoadingType
}

export const GlobalContext = createContext<GlobalLoadingType>({
  loading: false,
});

GlobalContext.displayName = "globalContext";

export const GlobalProvider: React.FC<GlobalProviderType> = ({ value, children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        ...value,
        loading,
        setLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
