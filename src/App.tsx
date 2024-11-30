import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { BannerAd } from './components/BannerAd'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { News } from './pages/News'
import { ViewNews } from './pages/ViewNews'
import { Box, Container, CssBaseline } from '@mui/material'
import { College } from './pages/College'
import { LowDataProtection } from './pages/LowDataProtection'
import { AdminNews } from './pages/admin/AdminNews'

function App() {

  return (
    <BrowserRouter>
      <CssBaseline />
      <Container maxWidth='lg' sx={{ backgroundColor: '#f7f7f7', minHeight: '100vh', padding: '16px', borderRadius: '8px' }}>
        <Box display="flex" alignItems="center" justifyContent="space-between" p={2} sx={{ backgroundColor: '#fff', borderRadius: '8px', boxShadow: 1 }}>
          <Navbar />
        </Box>
        <BannerAd />
        <Box mt={4}>

       
        <Routes>
            <Route path="/" element={<Home />} />
             <Route path="/a-faculdade" element={<College />} />
            <Route path="/dpo-lgpd" element={<LowDataProtection />} />
            <Route path="/noticias" element={<News />} />
            <Route path="/visualiza-noticia/:id" element={<ViewNews />} />
            <Route path="/admin-noticias" element={<AdminNews />} />
            {/*<Route path="/cadastrar-noticia" element={<CadastroNoticia />} />
            <Route path="/editar-noticia/:id" element={<EditarNoticia />} /> */}
          </Routes>

        </Box>
      </Container>
    </BrowserRouter>

  )
}

export default App
