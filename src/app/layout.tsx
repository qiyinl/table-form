import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import ThemeRegistry from '../theme/ThemeRegistry';
import Navigation from '../components/Navigation';
import { Box, Container } from '@mui/material';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });

export const metadata: Metadata = {
  title: 'Table-Form 2026',
  description: 'A modern Next.js project with a 90s tint',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <ThemeRegistry>
          <Navigation />
          <Container maxWidth="lg" sx={{ pb: 8 }}>
            <Box component="main">
              {children}
            </Box>
          </Container>
        </ThemeRegistry>
      </body>
    </html>
  );
}
