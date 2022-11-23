import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import AddIcon from "@mui/icons-material/Add";
import './MovieCard.css'

function MovieCard(props) {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=c437693157c2dcb8ec9a4049654f03b0&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          if (result?.results) {
           
            let movieData = result?.results;

            setIsLoaded(true);
            setItems(movieData);
          }
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  return (
    <div>
      {!isLoaded ? <>Loading</> : null}

      {error ? (
        <>Error: {error.message}</>
      ) : (
        <>
          <Container sx={{ py: 3 }} maxWidth="xl">
            <h2>Popular Shows</h2>
            <Grid container spacing={4}>
              {items.map((movie, index) => (
                <Grid item key={index} xs={8} sm={6} md={2}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardMedia
                      component="img"
                      sx={
                        {
                          // 16:9
                          // pt: '56.25%',
                          // pt: '20%',
                        }
                      }
                      image={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                      alt="movie-poster"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom className="movie-name"> 
                        {movie.title}
                      </Typography>
                    </CardContent>
                    <CardActions className="card-action">
                      <Button><SlideshowIcon /></Button>
                      <Button><AddIcon /> </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </>
      )}

      
    </div>
  );
}

export default MovieCard;
