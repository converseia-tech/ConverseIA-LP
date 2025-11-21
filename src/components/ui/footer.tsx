import { Link } from 'react-router-dom'

// Import generic icons from lucide-react
import {
    Globe, // Could represent a website or general online presence
    Share2, // Could represent sharing/social media in general
    MessageCircle, // Could represent communication/social
    Link as LinkIcon, // Renamed to avoid conflict with React Router Link
    Send, // Could represent sending a message, a bit like a paper plane for social
    Feather, // Could be an abstract representation for a 'feed' or 'post'
} from 'lucide-react'

const links = [
    {
        title: 'Features',
        href: '#features',
    },
    {
        title: 'Solution',
        href: '#solution',
    },
    {
        title: 'Customers',
        href: '#customers',
    },
    {
        title: 'Pricing',
        href: '#pricing',
    },
    {
        title: 'Help',
        href: '#help',
    },
    {
        title: 'About',
        href: '/sobre',
    },
]

const socialLinks = [
    {
        href: "https://twitter.com",
        label: "Twitter",
        icon: Share2,
    },
    {
        href: "https://facebook.com",
        label: "Facebook",
        icon: MessageCircle,
    },
    {
        href: "https://linkedin.com",
        label: "LinkedIn",
        icon: LinkIcon,
    },
    {
        href: "https://example.com",
        label: "Website",
        icon: Globe,
    },
    {
        href: "https://telegram.org",
        label: "Telegram",
        icon: Send,
    },
    {
        href: "https://medium.com",
        label: "Blog",
        icon: Feather,
    },
]

export default function FooterSection() {
    return (
        <footer className="py-16 md:py-32 border-t border-border bg-background">
            <div className="mx-auto max-w-5xl px-6">
                {/* Logo */}
                <Link
                    to="/"
                    aria-label="go home"
                    className="mx-auto block size-fit mb-8">
                    <img 
                        src="/nova_logo_CONVERSEIA_que_agora_e_converseia.png" 
                        alt="Logo" 
                        className="h-12 w-auto mx-auto"
                    />
                </Link>

                {/* Navigation Links */}
                <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
                    {links.map((link, index) => {
                        // Check if link is internal (starts with /) or anchor (starts with #)
                        const isInternal = link.href.startsWith('/');
                        const isAnchor = link.href.startsWith('#');
                        
                        if (isInternal && !isAnchor) {
                            return (
                                <Link
                                    key={index}
                                    to={link.href}
                                    className="text-muted-foreground hover:text-primary block duration-150 transition-colors">
                                    <span>{link.title}</span>
                                </Link>
                            );
                        }
                        
                        return (
                            <a
                                key={index}
                                href={link.href}
                                className="text-muted-foreground hover:text-primary block duration-150 transition-colors">
                                <span>{link.title}</span>
                            </a>
                        );
                    })}
                </div>

                {/* Social Links */}
                <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
                    {socialLinks.map((social, index) => {
                        const Icon = social.icon;
                        return (
                            <a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                className="text-muted-foreground hover:text-primary block transition-colors duration-150">
                                <Icon className="size-6" />
                            </a>
                        );
                    })}
                </div>

                {/* Copyright */}
                <span className="text-muted-foreground block text-center text-sm">
                    © {new Date().getFullYear()} ConverseIA, All rights reserved
                </span>
            </div>
        </footer>
    )
}
