import { useState, useEffect } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    const Online = () => {
      return setIsOnline(true);
    };
    const Offline = () => {
      return setIsOnline(false);
    };
    window.addEventListener("online", Online);
    window.addEventListener("offline", Offline);

    return () => {
      window.removeEventListener("online", Online);
      window.removeEventListener("offline", Offline);
    };
  }, []);
  return isOnline;
};
export default useOnline;
