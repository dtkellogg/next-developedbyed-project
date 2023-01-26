// "use client"  // whenever you want to use an onClick, or useState, useEffect

// import { useState } from "react"

import Movie from "./Movie"

export default async function Home() {
  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
  const res = await data.json()
  console.log(res)
  return (
    <main>
      <h1 className="text-lg py-2 m-4">Hello</h1>
      {res.results.map((movie) => (
        <Movie 
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
          release_date={movie.release_date}
        />
      ))}
    </main>
  )
}
