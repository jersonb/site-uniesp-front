import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import Grid from "@mui/material/Grid2"
import axios, { AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export interface NewsResponse {
    id: string,
    title: string,
    linkImage:string,
}

export function News() {

    const api = axios.create({
        baseURL: 'http://localhost:5270/api'
    });

    const [news, setNews] = useState<NewsResponse[]>([]);

    useEffect(() => {
        const fetchNoticias = () => {
            api.get<Promise<NewsResponse[]>>("news")
                .then((response: AxiosResponse) => setNews(response.data))
        }

        fetchNoticias()
    }, [])

    return (
        <Box sx={{ p: 4 }}>
            <Typography variant="h3" gutterBottom>Notícias</Typography>
            <Grid container spacing={4} columnSpacing={{ xs: 12, md: 3 }}>
                {news.map(n => (
                    <Grid  >
                        <Card style={{height:'100%'}} sx={{ maxWidth: 345}}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={n.linkImage}
                                alt="Imagem da Notícia"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {n.title}
                                </Typography>
                                <Link to={`/visualiza-noticia/${n.id}`} style={{ textDecoration: 'none', color: '#3f51b5' }}>
                                    <Typography variant="body2" color="text.secondary">
                                        Ler mais
                                    </Typography>
                                </Link>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}
