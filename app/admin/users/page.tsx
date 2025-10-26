import { LayoutWrapper } from "@/components/layout-wrapper"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Edit2, Trash2 } from "lucide-react"

export default function UsersPage() {
  return (
    <LayoutWrapper userRole="admin">
      <div className="p-4 md:p-8 space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">User Management</h1>
            <p className="text-muted-foreground">Manage farmers and extension officers</p>
          </div>
          <Button>Add User</Button>
        </div>

        {/* Search and Filter */}
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 text-muted-foreground" size={20} />
            <input
              type="text"
              placeholder="Search users..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <Button variant="outline" className="bg-transparent">
            Filter
          </Button>
        </div>

        {/* Users Table */}
        <Card className="border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/50 border-b border-border">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Name</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Role</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Region</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Fields</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Status</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  { id: 1, name: "Rajesh Kumar", role: "Farmer", region: "North", fields: 3, status: "Active" },
                  {
                    id: 2,
                    name: "Priya Singh",
                    role: "Extension Officer",
                    region: "South",
                    fields: 24,
                    status: "Active",
                  },
                  { id: 3, name: "Amit Patel", role: "Farmer", region: "East", fields: 2, status: "Active" },
                  { id: 4, name: "Deepak Sharma", role: "Farmer", region: "West", fields: 4, status: "Inactive" },
                  {
                    id: 5,
                    name: "Neha Gupta",
                    role: "Extension Officer",
                    region: "North",
                    fields: 18,
                    status: "Active",
                  },
                ].map((user) => (
                  <tr key={user.id} className="hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-foreground">{user.name}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      <Badge variant={user.role === "Farmer" ? "secondary" : "default"}>{user.role}</Badge>
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{user.region}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{user.fields}</td>
                    <td className="px-6 py-4 text-sm">
                      <Badge variant={user.status === "Active" ? "default" : "secondary"}>{user.status}</Badge>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Edit2 size={16} />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:text-destructive">
                          <Trash2 size={16} />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </LayoutWrapper>
  )
}
