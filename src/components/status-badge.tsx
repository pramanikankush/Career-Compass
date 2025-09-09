import { cn } from "@/lib/utils"

interface StatusBadgeProps {
  status: "interview" | "submitted" | "rejected"
  children: React.ReactNode
}

export function StatusBadge({ status, children }: StatusBadgeProps) {
  const variants = {
    interview: "bg-blue-200 text-blue-800",
    submitted: "bg-yellow-200 text-yellow-800", 
    rejected: "bg-red-200 text-red-800"
  }

  return (
    <span className={cn(
      "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium",
      variants[status]
    )}>
      {children}
    </span>
  )
}