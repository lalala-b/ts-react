import { useState, createContext } from "react";

interface GlobalLoadingType {
    loading: boolean,
    setLoading?: React.Dispatch<boolean>,
}

interface GlobalProviderType {
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
