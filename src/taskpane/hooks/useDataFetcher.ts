import { useEffect, useState } from "react";
import { tryCatch } from "../office-document.ts";

function useEffectDataFetcher(callbackFn: () => any) {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await tryCatch(callbackFn);
      setData(response);
    };

    fetchData();
  }, []);

  return data;
}

export default useEffectDataFetcher;
