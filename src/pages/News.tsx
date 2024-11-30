import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import Grid from "@mui/material/Grid2"
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { NewsResponse, NewsRequests } from '../api/api'


export function News() {

    const [news, setNews] = useState<NewsResponse[]>([]);

    useEffect(() => {
        NewsRequests.getNewsList()
            .then(setNews)
            .catch(console.error);
        return () => { };
    }, [])

    return (
        <Box sx={{ p: 4 }}>
            <Typography variant="h3" gutterBottom>Notícias</Typography>
            <Grid container spacing={4} columnSpacing={{ xs: 12, md: 3 }}>
                {news.map(n => (
                    <Grid  >
                        <Card style={{ height: '100%' }} sx={{ maxWidth: 345 }}>
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
