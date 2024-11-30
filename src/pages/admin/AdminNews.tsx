import { Box, Button, List, ListItem, ListItemText, Paper, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { NewsRequests, NewsResponse } from "../../api/api"

export function AdminNews() {
    const [news, setNews] = useState<NewsResponse[]>([])

    useEffect(() => {
        NewsRequests.getNewsList()
            .then(setNews)
            .catch(console.error);
        return () => { };

    }, [])

    const removerNoticia = (id: string) => {

        NewsRequests.deleteNews(id)
            .then(() => setNews(news.filter(noticia => noticia.id !== id)))
            .catch(error => console.error("Erro ao remover a notícia: ", error));
    }

    return (
        <Box sx={{ p: 4, backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
            <Typography variant="h4" gutterBottom>Gerenciar Notícias</Typography>
            <Button variant="contained" color="primary" component={Link} to="/cadastrar-noticia" sx={{ mb: 2 }}>
                Cadastrar Nova Notícia
            </Button>
            <List>
                {news.map((news) => (
                    <ListItem key={news.id} divider component={Paper} sx={{ mb: 2, p: 2, backgroundColor: '#ffffff', borderRadius: '8px' }}>
                        <ListItemText primary={news.title} secondary={news.subtitle} />
                        <Button variant="contained" color="secondary" component={Link} to={`/editar-noticia/${news.id}`} sx={{ mr: 1 }}>
                            Editar
                        </Button>
                        <Button variant="contained" color="error" onClick={() => removerNoticia(news.id)}>
                            Remover
                        </Button>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}