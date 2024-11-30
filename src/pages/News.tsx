import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import Grid from "@mui/material/Grid2"
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export interface NewsResponse{
    id: string,
    title: string,
}

export function News() {


    const [noticias, setNoticias] = useState<NewsResponse[]>([]);
    const url = "http://localhost:3000/noticias";

    useEffect(() => {
        const fetchNoticias = () => {
            try {
                const response = await axios.get<Promise<NewsResponse[]>>(url);
                setNoticias(response.data)
            } catch (error) {
                console.error("Erro ao buscar notícias ", error)
            }
        }
        axios.get<Promise<NewsResponse[]>>(url).then((data ) => setNoticias(data))

        fetchNoticias()
    }, [])

    return (
        <Box sx={{ p: 4 }}>
            <Typography variant="h3" gutterBottom>Notícias</Typography>
            <Grid container spacing={4} columnSpacing={{ xs: 12, md: 4 }}>
                {noticias.map(noticia => (
                    <Grid  >
                        <Card  sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://via.placeholder.com/300x140.png?text=Notícia+Imagem"
                                alt="Imagem da Notícia"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {noticia.titulo}
                                </Typography>
                                <Link to={`/visualiza-noticia/${noticia.id}`} style={{ textDecoration: 'none', color: '#3f51b5' }}>
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
