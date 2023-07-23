import { Container, Grid, Typography } from "@mui/material"
import Formulario from "./components/Formulario"
import NewsList from "./components/NewsList"
import { NewsProvider } from "./context/NewsProvider"

function App() {
  return (
    <NewsProvider>
      <Container maxWidth="lg">
        <main>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="#212121"
            fontFamily={"Roboto"}
            sx={{
              marginTop: 4,
              marginBottom: 6,
              fontWeight: "light",
              caretShape: "underline",
            }}
          >
            Buscador de Noticias
          </Typography>
        </main>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={10} md={6} lg={4}>
            <Formulario />
          </Grid>
        </Grid>

        <NewsList />
        
      </Container>
    </NewsProvider>
  )
}

export default App
