import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { NewsRequests } from '../api/api'

export function ViewNews() {
    const { id } = useParams()
    const [noticia, setNoticia] = useState({})


    useEffect(() => {
        const fetchNoticia = async () => {
            try {
                const response = await axios.get(url)
                setNoticia(response.data)
            } catch (error) {
                console.error("Erro ao buscar a notícia:", error)
            }
        }
        fetchNoticia()

        NewsRequests.getNews(id)
        .then(news => setNoticia(news))
        .catch(console.log);
    return () => { };
    }, [id])

    return (
        <div>
            <h1>{noticia.titulo}</h1>
            <p>{noticia.texto}</p>
        </div>
    )
}
