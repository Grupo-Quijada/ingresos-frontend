import { useRef } from "react";

function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);



  const handlePlay = () => {
    if (videoRef.current && audioRef.current) {
      videoRef.current.play();
      audioRef.current.play();
    }
  };

  return (
    <div style={{ textAlign: "center", margin: "auto" }}>
      <video
        ref={videoRef}
        width="0"
        height="0"
        controls={false}
        style={{ border: "2px solid #000", marginBottom: "10px" }}
      >
        <source src="/music.mp4" type="video/mp4" />
        Tu navegador no soporta la reproducción de videos.
      </video>
      <br />
      <button
        onClick={handlePlay}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#7e22ce",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Apreta aca wacho
      </button>
      <audio ref={audioRef}>
        <source src="/music.mp3" type="audio/mpeg" />
        Tu navegador no soporta la reproducción de audio.
      </audio>
    </div>
  );
}

export default VideoPlayer;
