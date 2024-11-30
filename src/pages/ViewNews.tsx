import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { NewsRequests, NewsResponse } from '../api/api'

export function ViewNews() {
    const { id } = useParams()
    const [news, setNews] = useState({} as NewsResponse)

    useEffect(() => {
        NewsRequests.getNews(id as string)
            .then(news => setNews(news))
            .catch(console.log);
        return () => { };
    }, [id])

    return (
        <div>
            <h1>{news.title}</h1>
            <p>{news.content}</p>
        </div>
    )
}
