import logo from "@/assets/images/logo.png";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900"
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900"
});

const title = "Lorenzo GPT Turbopack";
const description = "Generated by Lorenzo Faresin";
const locale = "en_US";


export const metadata: Metadata = {
    metadataBase: new URL("https://lorenzofaresin.com"),
    openGraph: {
        title,
        description,
        url: "https://lorenzofaresin.com",
        siteName: `${title} App`,
        locale,
        type: "website"
    },
    title,
    description
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang={locale}>
        <head>
            <link rel="icon" type="image/png" href="/favicon-48x48.png" sizes="48x48" />
            <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
            <link rel="shortcut icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="manifest" href="/site.webmanifest" />
        </head>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <header className="flex gap-4 flex-wrap items-center justify-center">
                <Image src={logo} alt="logo" className="w-20 h-20" />
                <h1 className="text-4xl">{title}</h1>
            </header>
            <main className="flex flex-col gap-8 w-full max-w-5xl mx-auto items-center h-full">
                {children}
            </main>
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
                <a
                    href="https://github.com/lorenzofaresin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                >
                    Powered by Lorenzo<span className="animate-pulse"> ❤️</span>Faresin
                </a>
            </footer>
        </div>
        </body>
        </html>
    );
}
