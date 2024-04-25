import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* adding inter fint from fonts.ts */}
      <body className={`${inter.className} antialiased` }>{children}</body> 
    </html>
  );
}
