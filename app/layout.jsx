import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/layout/ThemeProvider';

export const metadata = {
  title: 'Yogarajah Achchuthan | IT Instructor & Software Engineer',
  description: 'IT Instructor at University of Jaffna with expertise in software engineering, web development, and system architecture.',
  keywords: ['Software Engineer', 'IT Instructor', 'University of Jaffna', 'Web Development', 'System Architecture'],
  authors: [{ name: 'Yogarajah Achchuthan' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.achchuthan.lk',
    siteName: 'Yogarajah Achchuthan Portfolio',
    title: 'Yogarajah Achchuthan | IT Instructor & Software Engineer',
    description: 'IT Instructor at University of Jaffna with expertise in software engineering, web development, and system architecture.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

