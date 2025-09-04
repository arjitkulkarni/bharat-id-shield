import { Shield, Bell, Settings, User, Mic, WifiOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { StatusBadge } from "@/components/ui/status-badge"

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-6">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                Bharat-ID Shield
              </h1>
              <p className="text-xs text-muted-foreground">Decentralized Identity</p>
            </div>
          </div>
          <StatusBadge variant="verified" className="ml-4">
            Verified Identity
          </StatusBadge>
        </div>
        
        <div className="flex items-center space-x-3">
          <StatusBadge variant="success" className="hidden sm:flex">
            Online
          </StatusBadge>
          
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-4 w-4" />
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-accent rounded-full animate-pulse" />
          </Button>
          
          <Button variant="ghost" size="icon">
            <Mic className="h-4 w-4" />
          </Button>
          
          <Button variant="ghost" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
          
          <Button variant="outline" size="icon">
            <User className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  )
}