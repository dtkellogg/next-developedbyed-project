import Image from "next/image"


// The following makes the movie detail for each movie not need to fetch everytime you navigate to it (it's prerendered)
export async function generateStaticParams() {
  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
  const res = await data.json()
  return res.results.map((movie) => ({
    movie: toString(movie.id)
  }))
}

export default async function MovieDetail({params}) {
  console.log(params)
  const imagePath = 'https://image.tmdb.org/t/p/original'
  const data = await fetch(`https://api.themoviedb.org/3/movie/${params.movie}?api_key=${process.env.API_KEY}`, {next: {revalidate: 60}})  // after every 60sec, it will refetch
  const res = await data.json()
  return (
    <div>
      <div>
        <h2 className="text-2xl">{res.title}</h2>
        <h2 className="">{res.release_date}</h2>
        <h2 className="">{res.runtime} minutes</h2>
        <h2 className="text-sm bg-green-600 inline-block my-2 py-2 px-4 rounded">{res.status}</h2>
        <Image className="my-12 w-full" src={imagePath + res.backdrop_path} width={1000} height={1000} priority />
        <p>{res.overview}</p>
      </div>
    </div>
  )
}