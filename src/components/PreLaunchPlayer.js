'use client'

import { useEffect, useRef, useState } from 'react'
import { Play, Pause, Volume2, VolumeX, Maximize2 } from 'lucide-react'

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

function formatTime(t) {
  if (!Number.isFinite(t)) return '0:00'
  const m = Math.floor(t / 60)
  const s = Math.floor(t % 60).toString().padStart(2, '0')
  return `${m}:${s}`
}

function PreLaunchPlayer({ videoId, title = 'BHAV' }) {
  const wrapperRef = useRef(null)
  const iframeRef = useRef(null)
  const playerRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(false)
  const [ready, setReady] = useState(false)
  const [current, setCurrent] = useState(0)
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    let disposed = false
    loadVimeoSdk().then(() => {
      if (disposed || !iframeRef.current) return
      const player = new window.Vimeo.Player(iframeRef.current)
      playerRef.current = player
      player.on('play', () => setPlaying(true))
      player.on('pause', () => setPlaying(false))
      player.on('ended', () => setPlaying(false))
      player.on('timeupdate', ({ seconds, duration }) => {
        setCurrent(seconds)
        setDuration(duration)
      })
      player.ready().then(() => {
        if (disposed) return
        player.getDuration().then((d) => setDuration(d)).catch(() => {})
        player.getMuted().then((m) => !disposed && setMuted(m)).catch(() => {})
        setReady(true)
      })
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
    const isMuted = await p.getMuted()
    const next = !isMuted
    await p.setMuted(next)
    setMuted(next)
  }

  const onSeek = async (e) => {
    const p = playerRef.current
    if (!p || !duration) return
    const value = Number(e.target.value)
    await p.setCurrentTime((value / 100) * duration)
  }

  const goFullscreen = () => {
    const el = wrapperRef.current
    if (!el) return
    if (document.fullscreenElement) document.exitFullscreen()
    else el.requestFullscreen?.()
  }

  const progress = duration ? (current / duration) * 100 : 0

  return (
    <div ref={wrapperRef} className='relative w-full aspect-video bg-ink group'>
      <iframe
        ref={iframeRef}
        src={`https://player.vimeo.com/video/${videoId}?title=0&byline=0&portrait=0&dnt=1&badge=0&controls=0&playsinline=1`}
        title={title}
        className='absolute inset-0 border-b border-line w-full h-full pointer-events-none'
        allow='autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media'
        allowFullScreen
      />

      <div className='absolute inset-x-0 bottom-0 flex flex-col gap-2 px-4 py-3 bg-gradient-to-t from-ink/90 to-transparent transition-opacity opacity-100 md:opacity-0 md:group-hover:opacity-100 md:focus-within:opacity-100'>
        <input
          type='range'
          min={0}
          max={100}
          step={0.1}
          value={progress}
          onChange={onSeek}
          className='w-full h-1 accent-gold cursor-pointer'
          aria-label='Seek'
        />

        <div className='flex items-center gap-3 text-gold'>
          <button
            onClick={togglePlay}
            disabled={!ready}
            className='p-2 hover:bg-ink/60 border border-gold/40 transition disabled:opacity-50'
            aria-label={playing ? 'Pause' : 'Play'}
          >
            {playing ? <Pause size={16} /> : <Play size={16} />}
          </button>

          <button
            onClick={toggleMute}
            disabled={!ready}
            className='p-2 hover:bg-ink/60 border border-gold/40 transition disabled:opacity-50'
            aria-label={muted ? 'Unmute' : 'Mute'}
          >
            {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>

          <span className='text-xs font-lora tracking-widest text-cream'>
            {formatTime(current)} / {formatTime(duration)}
          </span>

          <button
            onClick={goFullscreen}
            className='ml-auto p-2 hover:bg-ink/60 border border-gold/40 transition'
            aria-label='Fullscreen'
          >
            <Maximize2 size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default PreLaunchPlayer
