import { LINK_VIDEO } from '@/lib/constants';
import { useState, useRef, useEffect } from 'react';
import Marquee from 'react-fast-marquee';

export const Video = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => setCurrentTime(video.currentTime);
    const updateDuration = () => setDuration(video.duration);
    
    video.addEventListener('timeupdate', updateTime);
    video.addEventListener('loadedmetadata', updateDuration);
    
    return () => {
      video.removeEventListener('timeupdate', updateTime);
      video.removeEventListener('loadedmetadata', updateDuration);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current;
    if (!video) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newTime = (clickX / rect.width) * duration;
    video.currentTime = newTime;
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;

    const newVolume = parseFloat(e.target.value);
    video.volume = newVolume;
    setVolume(newVolume);
  };

  const toggleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;

    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      video.requestFullscreen();
    }
  };

  return (
<div className="flex flex-col h-full justify-center gap-6 base:px-2 md:px-0 mt-12 md:mt-24">
<h2 className="base:text-3xl md:text-4xl font-bold text-white text-center">
        Conheça mais sobre a <br /> ConverseIA Direito:
      </h2>
      <div 
        className="max-w-5xl flex flex-col mx-auto bg-black w-full h-[500px] rounded-xl shadow relative group"
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
      >
        <video
          ref={videoRef}
          src={LINK_VIDEO}
          className="w-full h-full rounded-xl cursor-pointer"
          autoPlay={false}
          muted
          onClick={togglePlay}
        >
          Seu navegador não suporta o elemento de vídeo.
        </video>
        
        {/* Barra de progresso fixa no canto inferior */}
        <div 
          className="absolute bottom-0 left-0 w-full h-4 bg-gray-600 cursor-pointer rounded-b-xl overflow-hidden"
          onClick={handleProgressClick}
        >
          <div 
            className="h-full bg-[#0055fb] transition-all duration-150"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          />
        </div>
        
        {/* Controles customizados */}
        <div className={`absolute bottom-5 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-xl transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
          {/* Controles */}
          <div className="flex items-center justify-end text-white">
            <div className="flex items-center gap-6">
              {/* Controle de volume horizontal */}
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#0055fb]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                </svg>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="w-20 h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, #0055fb 0%, #0055fb ${volume * 100}%, #4b5563 ${volume * 100}%, #4b5563 100%)`
                  }}
                />
              </div>
              
              {/* Tela cheia */}
              <button 
                onClick={toggleFullscreen}
                className="text-[#0055fb] hover:text-[#0066ff] transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

{/* Seção de Tecnologias Incorporadas */}
<div className="flex flex-col gap-8 items-center w-full px-4 sm:px-6 md:px-8 max-w-7xl mx-auto mt-8">
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-light-primary">
    Tecnologias incorporadas
  </h2>

  <div className="bg-gradient-to-r py-4 px-6 from-dark-primary via-dark-third to-dark-primary rounded-lg w-full overflow-hidden">
    <Marquee
      autoFill
      pauseOnHover
      gradient
      gradientColor="#1B1B21"
      className="flex items-center"
    >
      {[
        { src: '/icons/openai.svg', alt: 'OpenAI' },
        { src: '/icons/brand-unknow.svg', alt: 'Marca desconhecida' },
        { src: '/icons/grok.png', alt: 'grok' },
        { src: '/icons/google.svg', alt: 'Google' },
        { src: '/icons/meta.svg', alt: 'Meta' },
        { src: '/icons/analytics.svg', alt: 'Google Analytics' },
        { src: '/icons/gemini.svg', alt: 'Gemini' },
        { src: '/icons/claude-ai.png', alt: 'claude-ai' },
      ].map((icon, index) => (
        <img
          key={index}
          src={icon.src}
          alt={icon.alt}
          className="w-10 sm:w-12 md:w-16 h-auto object-contain mx-4"
        />
      ))}
    </Marquee>
  </div>
</div>
    </div>
  );
};