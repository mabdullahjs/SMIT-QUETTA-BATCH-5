import axios from "axios"
import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        axios(url)
            .then(res => setData(res.data))
            .catch(() => setError(true))
            .finally(() => setLoading(false))
    }, [])

    return [loading , data , error]
}

export default useFetch