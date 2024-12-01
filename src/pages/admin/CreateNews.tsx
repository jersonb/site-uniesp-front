import { Box, Button, TextField, Typography } from "@mui/material"
import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import { NewsRequests } from "../../api/api"

export function CreateNews() {
    const [title, setTitle] = useState("")
    const [subtitle, setSubtitle] = useState("")
    const [content, setContent] = useState("")

    const navigate = useNavigate()

    const createNews = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        NewsRequests.createNews({ id: "", linkImage: "", content, subtitle, title })
            .then(() => navigate('/admin-noticias'))
            .catch(error => console.error("Erro ao cadastrar a notícia: ", error));
    }

    return (
        <Box component="form" onSubmit={createNews} noValidate sx={{ mt: 3, p: 4, backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
            <Typography variant="h4" gutterBottom>Cadastrar Notícia</Typography>
            <TextField label="Título" fullWidth margin="normal" value={title} onChange={(e) => setTitle(e.target.value)} />
            <TextField label="Subtítulo" fullWidth margin="normal" value={subtitle} onChange={(e) => setSubtitle(e.target.value)} />
            <TextField label="Texto" fullWidth multiline rows={4} margin="normal" value={content} onChange={(e) => setContent(e.target.value)} />
            <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
        </Box>
    )
}