import type { Metadata } from 'next';
import { Sora, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const sora = Sora({
    subsets: ['latin'],
    variable: '--font-sora',
});

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});

const mono = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--font-mono',
});

export const metadata: Metadata = {
    title: 'Arpit Srivastava | CS Student & Backend Developer',
    description: 'Personal Operating System of Arpit Srivastava',
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${sora.variable} ${inter.variable} ${mono.variable}`}
        >
        <body className="font-sans bg-[#050505] text-white selection:bg-cyan-400 selection:text-black antialiased">
        {children}
        </body>
        </html>
    );
}