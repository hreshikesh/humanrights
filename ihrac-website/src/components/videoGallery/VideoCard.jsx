// src/components/videoGallery/VideoCard.jsx
import React from 'react';
import { Play } from 'lucide-react';

const VideoCard = ({ thumbnail, title, category, duration = "03:45", onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group relative w-full h-full min-h-[220px] rounded-[24px] overflow-hidden border border-[#D4AF37]/25 shadow-lg shadow-[#0B1F3A]/20 cursor-pointer transition-all duration-500 hover:-translate-y-1.5 hover:border-[#D4AF37]/60 hover:shadow-2xl hover:shadow-[#0B1F3A]/50 select-none bg-[#0B1F3A]"
    >
      {/* Dynamic Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
        style={{ backgroundImage: `url(${thumbnail})` }}
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/95 via-[#0B1F3A]/40 to-[#0B1F3A]/60 transition-all duration-500 group-hover:bg-[#0B1F3A]/85" />

      {/* Resting Center Action Badge (fades on hover) */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-500 group-hover:opacity-0 group-hover:scale-110 pointer-events-none">
        <div className="px-4 py-2 rounded-full bg-[#0B1F3A]/90 border border-[#D4AF37]/50 backdrop-blur-md text-[10px] font-black uppercase tracking-[3px] text-[#D4AF37] shadow-xl whitespace-nowrap">
          Stream Action
        </div>
      </div>

      {/* Resting Bottom Metadata (fades on hover) */}
      <div className="absolute left-5 right-5 bottom-5 z-20 flex flex-col gap-1 transition-all duration-500 group-hover:opacity-0 group-hover:-translate-y-2 pointer-events-none">
        <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#D4AF37]">
          {category}
        </span>
        <h4 className="text-base font-extrabold text-white leading-snug drop-shadow-md line-clamp-2">
          {title}
        </h4>
      </div>

      {/* ================= HOVER HUD INTERFACE (Fades in) ================= */}
      <div className="relative z-30 w-full h-full p-5 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-400">
        
        {/* Top HUD Controls */}
        <div className="flex items-center justify-between">
          <button className="h-8 w-8 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-[#0B1F3A] text-white flex items-center justify-center transition-colors">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M16.198,10.896c-0.252,0-0.455,0.203-0.455,0.455v2.396c0,0.626-0.511,1.137-1.138,1.137H5.117c-0.627,0-1.138-0.511-1.138-1.137V7.852c0-0.626,0.511-1.137,1.138-1.137h5.315c0.252,0,0.456-0.203,0.456-0.455c0-0.251-0.204-0.455-0.456-0.455H5.117c-1.129,0-2.049,0.918-2.049,2.047v5.894c0,1.129,0.92,2.048,2.049,2.048h9.488c1.129,0,2.048-0.919,2.048-2.048v-2.396C16.653,11.099,16.45,10.896,16.198,10.896z" />
              <path d="M14.053,4.279c-0.207-0.135-0.492-0.079-0.63,0.133c-0.137,0.211-0.077,0.493,0.134,0.63l1.65,1.073c-4.115,0.62-5.705,4.891-5.774,5.082c-0.084,0.236,0.038,0.495,0.274,0.581c0.052,0.019,0.103,0.027,0.154,0.027c0.186,0,0.361-0.115,0.429-0.301c0.014-0.042,1.538-4.023,5.238-4.482l-1.172,1.799c-0.137,0.21-0.077,0.492,0.134,0.629c0.076,0.05,0.163,0.074,0.248,0.074c0.148,0,0.294-0.073,0.382-0.207l1.738-2.671c0.066-0.101,0.09-0.224,0.064-0.343c-0.025-0.118-0.096-0.221-0.197-0.287L14.053,4.279z" />
            </svg>
          </button>

          <div className="flex items-center gap-2">
            <button className="h-8 w-8 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-[#0B1F3A] text-white flex items-center justify-center transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M10.032,8.367c-1.112,0-2.016,0.905-2.016,2.018c0,1.111,0.904,2.014,2.016,2.014c1.111,0,2.014-0.902,2.014-2.014C12.046,9.271,11.143,8.367,10.032,8.367z" />
              </svg>
            </button>
            <button className="h-8 w-8 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-[#0B1F3A] text-white flex items-center justify-center transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Center Prompt & Progress */}
        <div className="flex flex-col gap-2">
          {/* Animated Gold Progress Playbar */}
          <div className="relative w-full h-1 bg-white/20 rounded-full overflow-hidden">
            <div className="absolute top-0 bottom-0 left-0 bg-[#D4AF37] rounded-full animate-[progress_10s_linear_infinite]" />
          </div>
        </div>

        {/* Bottom HUD Controls & Time */}
        <div className="flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <button className="h-8 w-8 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-[#0B1F3A] flex items-center justify-center transition-colors">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 16 16">
                <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z" />
              </svg>
            </button>

            <button className="h-9 w-9 rounded-full bg-[#D4AF37] text-[#0B1F3A] flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
              <Play className="w-4 h-4 fill-[#0B1F3A] ml-0.5" />
            </button>

            <button className="h-8 w-8 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-[#0B1F3A] flex items-center justify-center transition-colors">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                <path d="M9.344,2.593c-0.253-0.104-0.547-0.045-0.743,0.15L4.486,6.887H1.313c-0.377,0-0.681,0.305-0.681,0.681v4.916c0,0.377,0.304,0.681,0.681,0.681h3.154l4.137,4.142c0.13,0.132,0.304,0.201,0.482,0.201c0.088,0,0.176-0.017,0.261-0.052c0.254-0.105,0.42-0.354,0.42-0.629L9.765,3.224C9.765,2.947,9.599,2.699,9.344,2.593z" />
              </svg>
            </button>
          </div>

          <span className="text-xs font-semibold text-slate-300 font-mono">
            00:00 / {duration}
          </span>
        </div>

      </div>

      {/* Keyframe animation for the progress bar without styled-components */}
      <style>{`
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default VideoCard;