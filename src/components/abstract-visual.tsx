interface AbstractVisualProps {
  pattern: string
  gradient: string
  size?: number
}

export function AbstractVisual({ pattern, gradient, size = 64 }: AbstractVisualProps) {
  const renderPattern = () => {
    switch (pattern) {
      case 'tree':
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full">
            <circle cx="32" cy="20" r="8" fill="white" opacity="0.3" />
            <circle cx="20" cy="35" r="6" fill="white" opacity="0.25" />
            <circle cx="44" cy="35" r="6" fill="white" opacity="0.25" />
            <circle cx="15" cy="48" r="4" fill="white" opacity="0.2" />
            <circle cx="25" cy="48" r="4" fill="white" opacity="0.2" />
            <circle cx="39" cy="48" r="4" fill="white" opacity="0.2" />
            <circle cx="49" cy="48" r="4" fill="white" opacity="0.2" />
            <line x1="32" y1="28" x2="20" y2="29" stroke="white" strokeWidth="2" opacity="0.4" />
            <line x1="32" y1="28" x2="44" y2="29" stroke="white" strokeWidth="2" opacity="0.4" />
            <line x1="20" y1="41" x2="15" y2="44" stroke="white" strokeWidth="1.5" opacity="0.3" />
            <line x1="20" y1="41" x2="25" y2="44" stroke="white" strokeWidth="1.5" opacity="0.3" />
            <line x1="44" y1="41" x2="39" y2="44" stroke="white" strokeWidth="1.5" opacity="0.3" />
            <line x1="44" y1="41" x2="49" y2="44" stroke="white" strokeWidth="1.5" opacity="0.3" />
          </svg>
        )
      
      case 'network':
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full">
            <circle cx="16" cy="16" r="4" fill="white" opacity="0.4" />
            <circle cx="48" cy="16" r="4" fill="white" opacity="0.4" />
            <circle cx="32" cy="32" r="5" fill="white" opacity="0.5" />
            <circle cx="16" cy="48" r="4" fill="white" opacity="0.4" />
            <circle cx="48" cy="48" r="4" fill="white" opacity="0.4" />
            <line x1="16" y1="16" x2="32" y2="32" stroke="white" strokeWidth="2" opacity="0.3" />
            <line x1="48" y1="16" x2="32" y2="32" stroke="white" strokeWidth="2" opacity="0.3" />
            <line x1="16" y1="48" x2="32" y2="32" stroke="white" strokeWidth="2" opacity="0.3" />
            <line x1="48" y1="48" x2="32" y2="32" stroke="white" strokeWidth="2" opacity="0.3" />
            <line x1="16" y1="16" x2="48" y2="48" stroke="white" strokeWidth="1" opacity="0.2" />
            <line x1="48" y1="16" x2="16" y2="48" stroke="white" strokeWidth="1" opacity="0.2" />
          </svg>
        )
      
      case 'conversation':
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full">
            <rect x="12" y="16" width="20" height="12" rx="6" fill="white" opacity="0.3" />
            <rect x="32" y="32" width="20" height="12" rx="6" fill="white" opacity="0.4" />
            <circle cx="18" cy="22" r="1.5" fill="white" opacity="0.6" />
            <circle cx="22" cy="22" r="1.5" fill="white" opacity="0.6" />
            <circle cx="26" cy="22" r="1.5" fill="white" opacity="0.6" />
            <circle cx="38" cy="38" r="1.5" fill="white" opacity="0.6" />
            <circle cx="42" cy="38" r="1.5" fill="white" opacity="0.6" />
            <circle cx="46" cy="38" r="1.5" fill="white" opacity="0.6" />
          </svg>
        )
      
      case 'code':
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full">
            <path d="M20 24 L12 32 L20 40" stroke="white" strokeWidth="3" fill="none" opacity="0.4" />
            <path d="M44 24 L52 32 L44 40" stroke="white" strokeWidth="3" fill="none" opacity="0.4" />
            <line x1="28" y1="20" x2="36" y2="44" stroke="white" strokeWidth="2" opacity="0.3" />
            <rect x="24" y="14" width="16" height="2" fill="white" opacity="0.2" />
            <rect x="24" y="18" width="12" height="2" fill="white" opacity="0.2" />
            <rect x="24" y="46" width="16" height="2" fill="white" opacity="0.2" />
            <rect x="24" y="50" width="12" height="2" fill="white" opacity="0.2" />
          </svg>
        )
      
      case 'building':
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full">
            <rect x="16" y="20" width="12" height="32" fill="white" opacity="0.3" />
            <rect x="36" y="16" width="12" height="36" fill="white" opacity="0.4" />
            <rect x="18" y="24" width="2" height="2" fill="white" opacity="0.6" />
            <rect x="22" y="24" width="2" height="2" fill="white" opacity="0.6" />
            <rect x="18" y="28" width="2" height="2" fill="white" opacity="0.6" />
            <rect x="22" y="28" width="2" height="2" fill="white" opacity="0.6" />
            <rect x="38" y="20" width="2" height="2" fill="white" opacity="0.6" />
            <rect x="42" y="20" width="2" height="2" fill="white" opacity="0.6" />
            <rect x="38" y="24" width="2" height="2" fill="white" opacity="0.6" />
            <rect x="42" y="24" width="2" height="2" fill="white" opacity="0.6" />
          </svg>
        )
      
      case 'database':
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full">
            <ellipse cx="32" cy="20" rx="16" ry="4" fill="white" opacity="0.4" />
            <ellipse cx="32" cy="32" rx="16" ry="4" fill="white" opacity="0.3" />
            <ellipse cx="32" cy="44" rx="16" ry="4" fill="white" opacity="0.3" />
            <line x1="16" y1="20" x2="16" y2="44" stroke="white" strokeWidth="2" opacity="0.3" />
            <line x1="48" y1="20" x2="48" y2="44" stroke="white" strokeWidth="2" opacity="0.3" />
          </svg>
        )
      
      case 'frontend':
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full">
            <rect x="12" y="16" width="40" height="28" rx="4" fill="white" opacity="0.3" />
            <rect x="16" y="20" width="32" height="20" fill="white" opacity="0.2" />
            <circle cx="20" cy="24" r="2" fill="white" opacity="0.5" />
            <rect x="26" y="22" width="8" height="2" fill="white" opacity="0.4" />
            <rect x="26" y="26" width="12" height="2" fill="white" opacity="0.4" />
            <rect x="20" y="32" width="6" height="2" fill="white" opacity="0.3" />
            <rect x="28" y="32" width="8" height="2" fill="white" opacity="0.3" />
          </svg>
        )
      
      case 'ml':
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full">
            <circle cx="20" cy="20" r="3" fill="white" opacity="0.4" />
            <circle cx="44" cy="20" r="3" fill="white" opacity="0.4" />
            <circle cx="32" cy="32" r="4" fill="white" opacity="0.5" />
            <circle cx="20" cy="44" r="3" fill="white" opacity="0.4" />
            <circle cx="44" cy="44" r="3" fill="white" opacity="0.4" />
            <path d="M20 20 Q32 26 44 20" stroke="white" strokeWidth="2" fill="none" opacity="0.3" />
            <path d="M20 44 Q32 38 44 44" stroke="white" strokeWidth="2" fill="none" opacity="0.3" />
            <line x1="32" y1="28" x2="32" y2="36" stroke="white" strokeWidth="2" opacity="0.4" />
          </svg>
        )
      
      case 'api':
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full">
            <rect x="12" y="24" width="16" height="16" rx="2" fill="white" opacity="0.3" />
            <rect x="36" y="24" width="16" height="16" rx="2" fill="white" opacity="0.3" />
            <path d="M28 32 L36 32" stroke="white" strokeWidth="3" opacity="0.4" />
            <path d="M30 28 L34 32 L30 36" stroke="white" strokeWidth="2" fill="none" opacity="0.5" />
            <circle cx="20" cy="32" r="2" fill="white" opacity="0.6" />
            <circle cx="44" cy="32" r="2" fill="white" opacity="0.6" />
          </svg>
        )
      
      case 'cloud':
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full">
            <path d="M16 36 Q16 28 24 28 Q28 20 36 20 Q44 20 48 28 Q56 28 56 36 Q56 44 48 44 L24 44 Q16 44 16 36" fill="white" opacity="0.4" />
            <circle cx="24" cy="32" r="1.5" fill="white" opacity="0.6" />
            <circle cx="32" cy="32" r="1.5" fill="white" opacity="0.6" />
            <circle cx="40" cy="32" r="1.5" fill="white" opacity="0.6" />
            <circle cx="48" cy="32" r="1.5" fill="white" opacity="0.6" />
          </svg>
        )
      
      case 'mobile':
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full">
            <rect x="24" y="12" width="16" height="40" rx="4" fill="white" opacity="0.4" />
            <rect x="26" y="18" width="12" height="28" fill="white" opacity="0.2" />
            <circle cx="32" cy="16" r="1" fill="white" opacity="0.6" />
            <rect x="30" y="48" width="4" height="2" rx="1" fill="white" opacity="0.6" />
            <rect x="28" y="22" width="8" height="1" fill="white" opacity="0.3" />
            <rect x="28" y="26" width="6" height="1" fill="white" opacity="0.3" />
          </svg>
        )
      
      case 'devops':
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full">
            <circle cx="32" cy="32" r="16" fill="none" stroke="white" strokeWidth="2" opacity="0.3" />
            <path d="M32 16 L40 24 L32 32 L24 24 Z" fill="white" opacity="0.4" />
            <path d="M32 32 L40 40 L32 48 L24 40 Z" fill="white" opacity="0.3" />
            <circle cx="32" cy="32" r="3" fill="white" opacity="0.5" />
            <path d="M20 20 L44 44" stroke="white" strokeWidth="1" opacity="0.2" />
            <path d="M44 20 L20 44" stroke="white" strokeWidth="1" opacity="0.2" />
          </svg>
        )
      
      case 'security':
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full">
            <path d="M32 12 L44 20 L44 36 Q44 48 32 52 Q20 48 20 36 L20 20 Z" fill="white" opacity="0.4" />
            <path d="M28 28 L30 32 L36 24" stroke="white" strokeWidth="2" fill="none" opacity="0.6" />
            <circle cx="32" cy="32" r="8" fill="none" stroke="white" strokeWidth="1" opacity="0.3" />
          </svg>
        )
      
      case 'product':
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full">
            <rect x="16" y="20" width="32" height="24" rx="4" fill="white" opacity="0.3" />
            <circle cx="24" cy="28" r="2" fill="white" opacity="0.5" />
            <rect x="30" y="26" width="12" height="2" fill="white" opacity="0.4" />
            <rect x="30" y="30" width="8" height="2" fill="white" opacity="0.4" />
            <rect x="20" y="36" width="6" height="2" fill="white" opacity="0.3" />
            <rect x="28" y="36" width="8" height="2" fill="white" opacity="0.3" />
            <rect x="38" y="36" width="6" height="2" fill="white" opacity="0.3" />
          </svg>
        )
      
      case 'design':
        return (
          <svg viewBox="0 0 64 64" className="w-full h-full">
            <circle cx="32" cy="32" r="12" fill="none" stroke="white" strokeWidth="2" opacity="0.4" />
            <circle cx="32" cy="20" r="4" fill="white" opacity="0.5" />
            <circle cx="44" cy="32" r="4" fill="white" opacity="0.5" />
            <circle cx="32" cy="44" r="4" fill="white" opacity="0.5" />
            <circle cx="20" cy="32" r="4" fill="white" opacity="0.5" />
            <path d="M32 24 L32 28" stroke="white" strokeWidth="2" opacity="0.3" />
            <path d="M40 32 L36 32" stroke="white" strokeWidth="2" opacity="0.3" />
            <path d="M32 40 L32 36" stroke="white" strokeWidth="2" opacity="0.3" />
            <path d="M24 32 L28 32" stroke="white" strokeWidth="2" opacity="0.3" />
          </svg>
        )
      
      default:
        return (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-8 h-8 bg-white/30 rounded-full"></div>
          </div>
        )
    }
  }

  return (
    <div 
      className={`w-${size/4} h-${size/4} rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center p-2`}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      {renderPattern()}
    </div>
  )
}