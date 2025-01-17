import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '../styles/globals.css';

const geistSans = localFont({
    src: '../styles/fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900',
});
const geistMono = localFont({
    src: '../styles/fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900',
});

export const metadata: Metadata = {
    title: 'Avatar Generator',
    description: 'Generate avatars with gradients',
    applicationName: 'Avatar Generator',
};

const RootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => (
    <html lang='en'>
        <head>
            <link
                rel='icon'
                href='/app/light.svg'
                media='(prefers-color-scheme: light)'
            />
            <link
                rel='icon'
                href='/app/dark.svg'
                media='(prefers-color-scheme: dark)'
            />
        </head>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
            <main>{children}</main>
        </body>
    </html>
);

export default RootLayout;
