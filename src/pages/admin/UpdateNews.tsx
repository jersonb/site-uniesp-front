import { Box, Button, TextField, Typography } from "@mui/material"
import { FormEvent, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { NewsRequests } from "../../api/api"

export function UpdateNews() {
    const { id } = useParams()
    const [title, setTitle] = useState("")
    const [subtitle, setSubtitle] = useState("")
    const [content, setContent] = useState("")
    const navigate = useNavigate()

    useEffect(() => {

        NewsRequests.getNews(id as string)
            .then(res => {
                setTitle(res.title);
                setSubtitle(res.subtitle);
                setContent(res.content);

            }).catch(error => console.error("Erro ao buscar a notícia: ", error));
        return () => { };
    }, [id])

    const editarNoticia = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        NewsRequests.updateNews(id as string, { id: "", linkImage: "", content, subtitle, title })
            .then(() => navigate('/admin-noticias'))
            .catch(error => console.error("Erro ao editar a notícia: ", error));
    }

    return (
        <Box component="form" onSubmit={editarNoticia} noValidate sx={{ mt: 3, p: 4, backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
            <Typography variant="h4" gutterBottom>Editar Notícia</Typography>
            <TextField label="Título" fullWidth margin="normal" value={title} onChange={(e) => setTitle(e.target.value)} />
            <TextField label="Subtítulo" fullWidth margin="normal" value={subtitle} onChange={(e) => setSubtitle(e.target.value)} />
            <TextField label="Texto" fullWidth multiline rows={4} margin="normal" value={content} onChange={(e) => setContent(e.target.value)} />
            <Button type="submit" variant="contained" color="primary">Salvar</Button>
        </Box>
    )
}