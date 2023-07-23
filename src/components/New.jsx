import { PropTypes } from "prop-types"
import { Card, CardActions, CardContent, CardMedia, Grid, Link, Typography } from "@mui/material"

const New = ({ article }) => {
  const { title, description, source: { name }, urlToImage, url } = article

  // If the image is not available, do not show the card
  if (!urlToImage) return null

  // Set a default image if the image is not available
  const handleImageError = (e) => {
    e.target.src = "https://via.placeholder.com/240x160?text=No+image"
  }

  return (
    <Grid item md={6} lg={4}>
      <Card
        sx={{ height: "100%", display: "flex", flexDirection: "column" }}
        elevation={2}
      >
        <CardMedia
          component={"img"}
          alt={`Imagen de la noticia ${title}`}
          image={urlToImage}
          height={240}
          onError={handleImageError}
        />

        <CardContent>
          <Typography variant="body1" color="error">
            {name}
          </Typography>

          <Typography variant="h5" component="div">
            {title}
          </Typography>

          <Typography variant="body2">{description}</Typography>
        </CardContent>

        <CardActions sx={{ marginTop: "auto" }}>
          <Link
            href={url}
            target="_blank"
            variant="button"
            underline="none"
            rel="noopener noreferrer"
            width={"100%"}
            marginLeft={1}
          >
            Leer noticia
          </Link>
        </CardActions>
      </Card>
    </Grid>
  )
}

// PropTypes validation (similar a Typescript)
New.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    source: PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string,
    }).isRequired,
    urlToImage: PropTypes.string,
    url: PropTypes.string.isRequired,
  }).isRequired,
}

export default New
