import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { StatusBadge } from "@/components/ui/status-badge"
import { Progress } from "@/components/ui/progress"
import { 
  Shield, 
  AlertTriangle, 
  Lock, 
  Eye, 
  Fingerprint,
  Wifi,
  WifiOff,
  Brain,
  TrendingUp
} from "lucide-react"

export function SecurityPanel() {
  return (
    <div className="space-y-6">
      {/* AI Security Status */}
      <Card className="border-success/20 bg-gradient-to-br from-success/5 to-transparent">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center space-x-2">
              <Brain className="h-5 w-5 text-success" />
              <span>AI Guardian</span>
            </CardTitle>
            <StatusBadge variant="success">Active</StatusBadge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Security Score</span>
              <span className="font-semibold">97/100</span>
            </div>
            <Progress value={97} className="h-2" />
          </div>
          
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4 text-success" />
              <span>No anomalies detected</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4 text-success" />
              <span>Identity protected</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Authentication Status */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center space-x-2">
            <Lock className="h-5 w-5 text-primary" />
            <span>Authentication</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Fingerprint className="h-4 w-4 text-success" />
              <span className="text-sm">Biometric Lock</span>
            </div>
            <StatusBadge variant="success">Enabled</StatusBadge>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Eye className="h-4 w-4 text-primary" />
              <span className="text-sm">PIN Protection</span>
            </div>
            <StatusBadge variant="success">Active</StatusBadge>
          </div>
          
          <Button variant="outline" size="sm" className="w-full mt-3">
            Manage Security Settings
          </Button>
        </CardContent>
      </Card>

      {/* Connection Status */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center space-x-2">
            <Wifi className="h-5 w-5 text-primary" />
            <span>Connection</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm">Blockchain Sync</span>
            <StatusBadge variant="success">Connected</StatusBadge>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm">Offline Mode</span>
            <StatusBadge variant="info">Ready</StatusBadge>
          </div>
          
          <div className="text-xs text-muted-foreground">
            Last sync: 2 minutes ago
          </div>
        </CardContent>
      </Card>

      {/* Recent Alerts */}
      <Card className="border-warning/20">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5 text-warning" />
            <span>Security Alerts</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-sm text-muted-foreground">
            No security alerts in the last 24 hours.
          </div>
          <Button variant="ghost" size="sm" className="w-full mt-3 text-xs">
            View Alert History
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}