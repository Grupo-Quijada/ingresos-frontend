import VideoPlayer from "../components/Music"

export const HomePage = () => {
  return (
    <div className="bg-slate-900 text-white flex flex-col justify-center" >
      <h1 className="text-4xl font-bold text-center" >
        HomePage
      </h1>
      <a href="/help" className="underline text-purple-700 font-bold mx-auto ">Help</a>
      <img src="/meme.jpg" alt="" className="mx-auto object-cover size-52 animate-pulse" />
      <VideoPlayer />
    </div>

  )
}
