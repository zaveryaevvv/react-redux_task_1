import { useCallback } from "react";

export const useHttp = () => {

    const request = useCallback(async (url, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => {

        try {
            const response = await fetch(url, {method, body, headers});

            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }

            const data = await response.json();

            return data;
        } catch(e) {
            throw e;
        }
    }, []);

    const getFilter = useCallback(async (url, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => {

        try {
            const response = await fetch(url, {method, body, headers});

            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }

            const data = await response.json();

            return data;
        } catch(e) {
            throw e;
        }
    }, []);


    const addNewHero = useCallback(async ({url, method = 'POST', body = null, headers = {'Content-Type': 'application/json'}}) => {
        console.log(body, url);
        

        try {
            const response = await fetch(url, {method, body, headers});

            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }

            const data = await response.json();
            console.log(`data from fetch hook - ${data}`);
            
            return data;
        } catch(e) {
            throw e;
        }
    }, []);




    return {request, 
            addNewHero,
            getFilter
            // clearError, 
            // process, 
            // setProcess
        }
}