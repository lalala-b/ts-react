declare global {
  interface Window {
    CONFIG: any
  }
}

const CONFIG = window?.CONFIG ? window.CONFIG : process.env;

const getConfig = (k: string) => {
  return CONFIG[k] ?? "";
}

export default getConfig;
