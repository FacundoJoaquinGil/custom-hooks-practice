import { useState, useEffect } from "react"

export const useFetch = (url) => {

    const [value, setValue] = useState({
        data: null,
        isLoading: true,
        error: null
    })

    const {data, isLoading, error } = value

    const getFetch = async () => {
        if (!url) return
        try {
            const response = await fetch(url)
            const data = await response.json()
            setValue({
                data,
                isLoading: false,
                error: null
            })
        }
        catch {
            setValue({
                data: null,
                isLoading: false,
                error: error
            })
        }
    }

    useEffect(() => {
        getFetch()
    },[url])
        

    return {
        data,
        isLoading,
        error
    }

}