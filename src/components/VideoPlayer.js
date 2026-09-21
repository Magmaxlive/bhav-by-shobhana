'use client'

import { useEffect, useRef, useState } from 'react'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'

const SDK_URL = 'https://player.vimeo.com/api/player.js'

function loadVimeoSdk() {
  if (typeof window === 'undefined') return Promise.resolve()
  if (window.Vimeo?.Player) return Promise.resolve()
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${SDK_URL}"]`)
    if (existing) {
      existing.addEventListener('load', resolve, { once: true })
      existing.addEventListener('error', reject, { once: true })
      return
    }
    const s = document.createElement('script')
    s.src = SDK_URL
    s.async = true
    s.onload = resolve
    s.onerror = reject
    document.head.appendChild(s)
  })
}

function VideoPlayer({ videoId = '1228743282', title = 'BHAV', bgImage = '/images/hero.jpg' }) {
  const iframeRef = useRef(null)
  const playerRef = useRef(null)
  const [playing, setPlaying] = useState(true)
  const [muted, setMuted] = useState(true)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let disposed = false
    loadVimeoSdk().then(() => {
      if (disposed || !iframeRef.current) return
      const player = new window.Vimeo.Player(iframeRef.current)
      playerRef.current = player
      player.on('play', () => setPlaying(true))
      player.on('pause', () => setPlaying(false))
      player.on('ended', () => setPlaying(false))
      player.ready().then(() => !disposed && setReady(true))
    })
    return () => {
      disposed = true
      playerRef.current?.destroy().catch(() => {})
    }
  }, [])

  const togglePlay = async () => {
    const p = playerRef.current
    if (!p) return
    if (playing) await p.pause()
    else await p.play()
  }

  const toggleMute = async () => {
    const p = playerRef.current
    if (!p) return
    const next = !muted
    await p.setMuted(next)
    setMuted(next)
  }

  return (
    <div
      className="relative w-full h-full min-h-[260px] aspect-video lg:aspect-auto border-2 border-gold shadow-[0_0_30px_rgba(239,199,134,0.35)] overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url('${bgImage}')` }}
    >
      <div className="absolute inset-0 bg-ink/85" />

      <div className="absolute inset-0 flex items-center justify-center p-3">
        <iframe
          ref={iframeRef}
          className="max-w-full max-h-full h-full aspect-video relative z-10 "
          src={`https://player.vimeo.com/video/${videoId}?background=1&muted=1&loop=1&autoplay=1&playsinline=1&title=0&byline=0&portrait=0&dnt=1&badge=0&autopause=0`}
          title={title}
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
          allowFullScreen
        />
      </div>

      <div className="absolute bottom-4 left-4 flex gap-3 z-10">
        <button
          onClick={togglePlay}
          disabled={!ready}
          className="bg-ink/70 hover:bg-ink text-gold p-3 backdrop-blur-sm border border-gold/40 transition disabled:opacity-50"
          aria-label={playing ? 'Pause' : 'Play'}
        >
          {playing ? <Pause size={18} /> : <Play size={18} />}
        </button>

        <button
          onClick={toggleMute}
          disabled={!ready}
          className="bg-ink/70 hover:bg-ink text-gold p-3 backdrop-blur-sm border border-gold/40 transition disabled:opacity-50"
          aria-label={muted ? 'Unmute' : 'Mute'}
        >
          {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>
      </div>
    </div>
  )
}

export default VideoPlayer
