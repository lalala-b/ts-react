import { useState, createContext } from "react";

export interface GlobalLoadingType {
    loading: boolean,
    setLoading?: React.Dispatch<boolean>,
}
export interface GlobalLoadingProviderType {
    value?: GlobalLoadingType
}

export const GlobalLoadingContext = createContext<GlobalLoadingType>({
  loading: false,
});

GlobalLoadingContext.displayName = "GlobalLoadingContext";

interface LoadingObserverListType {
  [key:string]: (React.Dispatch<boolean> | (() => void))[],
}

interface LoadingObserverType {
  list: LoadingObserverListType,
  on: (key: string, fn: React.Dispatch<boolean>) => void,
  emit: (key: string, data: boolean) => void
}

export const Observer: LoadingObserverType = {
  list: {},
  on(key, fn) {
    if (!this.list[key]) {
      this.list[key] = [];
    }
    this.list[key].push(fn);
  },
  emit(key, data) {
    (this.list[key] || []).forEach((item: React.Dispatch<boolean>) => {
      item(data);
    });
  },
};

export const GlobalLoadingProvider: React.FC<GlobalLoadingProviderType> = ({ value, children }) => {
  const [loading, setLoading] = useState<boolean>(false);

  Observer.on("openLoading", setLoading);
  Observer.on("closeLoading", setLoading);

  return (
    <GlobalLoadingContext.Provider
      value={{
        ...value,
        loading,
        setLoading,
      }}
    >
      {children}
    </GlobalLoadingContext.Provider>
  );
};
