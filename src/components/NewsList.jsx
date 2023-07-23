import Grid from "@mui/material/Grid"
import Pagination from "@mui/material/Pagination"
import Stack from "@mui/material/Stack"
import useNews from "../hooks/useNews"
import News from "./New"

const NewsList = () => {
  const { news, page, newsTotal, handleChangePage } = useNews()

  const totalPages = Math.ceil(newsTotal / 20)

  return (
    <>
      <Grid container spacing={3} marginTop={6}>
        {news.map((article) => (
          <News article={article} key={article.url} />
        ))}
      </Grid>

      <Stack
        spacing={2}
        justifyContent="center"
        alignItems="center"
        flexDirection="row"
        marginTop={7}
        marginBottom={7}
      >
        <Pagination
          count={totalPages}
          variant="outlined"
          onChange={handleChangePage}
          page={page}
        />
      </Stack>
    </>
  )
}

export default NewsList
