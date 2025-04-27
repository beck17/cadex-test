import {Nunito} from "next/font/google";
import {ConfigProvider} from "antd";

import {Layout} from "@/components/layout/layout/Layout";


export const metadata = {
    title: 'Cadex Test Project | Bogdan Odintsov',
    description: 'A demo frontend project using React 19, Next.js 15, Ant Design, Stitches, and modern tech stack.',
    applicationName: 'Cadex Test',
    keywords: ['Next.js', 'React', 'Frontend', 'Ant Design', 'Stitches', 'React Hook Form'],
    authors: [{name: 'Bogdan Odintsov'}],
    creator: 'Bogdan Odintsov',
    openGraph: {
        title: 'Cadex Test Project',
        description: 'Frontend project built with React 19, Next.js 15 and Stitches.',
        // url: 'https://your-vercel-deployment-url.com',
        siteName: 'Cadex Test',
        images: [
            {
                url: '/next.svg',
                width: 1200,
                height: 630,
                alt: 'Cadex Test Project',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Cadex Test Project',
        description: 'Frontend test project built with React 19 and Next.js 15.',
        images: ['/next.svg'],
    },
}

const nunito = Nunito({
    subsets: ['cyrillic'],
    variable: '--font-nunito',
    weight: ['400', '500', '600', '700', '800', '900'],
})

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={nunito.className}>
        <ConfigProvider>
            <Layout>
                {children}
            </Layout>
        </ConfigProvider>
        </body>
        </html>
    );
}
