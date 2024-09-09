import { Inter } from "next/font/google";
import "./globals.css";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Yanura!',
  description: 'Yanura, an AI-powered job search platform that analyzes your profile, skills, and preferences to recommend tailored job opportunities.',
  keywords: ['Yanura', 'AI', 'Job Search', 'Job Matching', 'Job Recommendations'],
  creator: 'Damy Matuwidi, Shayan Janjua, Mateusz Niedbalski',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
