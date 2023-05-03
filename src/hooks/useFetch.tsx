/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"

export const useFetch = (url: string) => {
    const [data, setData] = useState<any>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const abortFetch = new AbortController();
        setLoading(true);
  
        fetch(url, {signal : abortFetch.signal})
        .then(res => {
            if (!res.ok) {
                throw Error("Could not fetch resource")
            }
            return res.json();
        })
        .then(data => {
            setLoading(false);
            setData(data);
        })
        .catch(() => {
            setError(true);
        })

        return () => {
            abortFetch.abort()
        };
    }, [url])

    return {data, loading, error};
}