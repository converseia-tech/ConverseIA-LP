import FooterSection from "@/components/ui/footer";

export default function FooterDemo() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Hero Content */}
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Footer Component Demo
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Modern footer component with social links, navigation, and responsive design.
            Scroll down to see the footer in action.
          </p>
          
          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Fast Loading</h3>
              <p className="text-sm text-muted-foreground">Optimized for performance with minimal bundle size</p>
            </div>

            <div className="p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Responsive</h3>
              <p className="text-sm text-muted-foreground">Works seamlessly on all devices and screen sizes</p>
            </div>

            <div className="p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-lg bg-pink-500/10 flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Customizable</h3>
              <p className="text-sm text-muted-foreground">Easy to adapt colors, links, and icons to your brand</p>
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-16 mt-24">
            <section className="py-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Why Use This Footer?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A well-designed footer provides essential navigation, builds trust through social proof, 
                and completes the user experience. This footer component includes all the modern features 
                you need while maintaining a clean, professional look.
              </p>
            </section>

            <section className="py-12 grid md:grid-cols-2 gap-8 text-left">
              <div className="p-8 rounded-2xl border border-border bg-card/30">
                <h3 className="text-2xl font-bold text-foreground mb-3">Navigation Links</h3>
                <p className="text-muted-foreground">
                  Quick access to important pages like Features, Solutions, Pricing, and more. 
                  Helps users find what they need even at the bottom of the page.
                </p>
              </div>

              <div className="p-8 rounded-2xl border border-border bg-card/30">
                <h3 className="text-2xl font-bold text-foreground mb-3">Social Media</h3>
                <p className="text-muted-foreground">
                  Connect with your audience across multiple platforms. The footer includes 6 
                  customizable social links with modern lucide-react icons.
                </p>
              </div>

              <div className="p-8 rounded-2xl border border-border bg-card/30">
                <h3 className="text-2xl font-bold text-foreground mb-3">Branding</h3>
                <p className="text-muted-foreground">
                  Centralized logo placement reinforces brand identity. Easy to replace with 
                  your own logo image or SVG component.
                </p>
              </div>

              <div className="p-8 rounded-2xl border border-border bg-card/30">
                <h3 className="text-2xl font-bold text-foreground mb-3">Copyright</h3>
                <p className="text-muted-foreground">
                  Automatically updates the year with JavaScript. Protects your content and 
                  establishes legal ownership of your brand materials.
                </p>
              </div>
            </section>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-24 animate-bounce">
            <svg 
              className="w-6 h-6 text-muted-foreground mx-auto" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            <p className="text-sm text-muted-foreground mt-2">Scroll to see footer</p>
          </div>
        </div>
      </div>

      {/* Footer Component */}
      <FooterSection />
    </div>
  );
}
