import { ThemeToggle } from "@/components/ui/theme-toggle"

function DefaultToggle() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="space-y-8 text-center max-w-md">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Theme Toggle Demo
          </h1>
          <p className="text-muted-foreground">
            Click the toggle to switch between dark and light modes
          </p>
        </div>
        
        <div className="flex justify-center">
          <ThemeToggle />
        </div>
        
        <div className="space-y-4 p-6 rounded-lg border border-border bg-card">
          <h2 className="text-2xl font-semibold text-card-foreground">
            Sample Card
          </h2>
          <p className="text-muted-foreground">
            This card demonstrates how the theme affects different components.
            The colors adapt automatically to the selected theme.
          </p>
          <div className="flex gap-2 justify-center">
            <div className="w-16 h-16 rounded-lg bg-primary" />
            <div className="w-16 h-16 rounded-lg bg-secondary" />
            <div className="w-16 h-16 rounded-lg bg-accent" />
          </div>
        </div>
      </div>
    </div>
  )
}

export { DefaultToggle }
export default DefaultToggle
