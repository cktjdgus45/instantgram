import Header from './components/Header';
import AuthContext from '../context/AuthContext';
import SWRConfigContext from '../context/SWRConfigContext';
import { Open_Sans } from 'next/font/google'
import './globals.css'
import { Metadata } from 'next';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: "'Instantgram'",
    template: 'Instantgram | %s'
  },
  description: 'Instantgram Photos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={openSans.className}>
      <body className='w-full bg-neutral-50 overflow-auto'>
        <AuthContext>
          <header className='sticky top-0 bg-white z-10 border-b'>
            <div className='max-w-screen-xl mx-auto'>
              <Header />
            </div>
          </header>
          <main className='w-full flex justify-center max-w-screen-xl mx-auto'>
            <SWRConfigContext>{children}</SWRConfigContext>
          </main>
        </AuthContext>
      </body>
    </html>
  )
}
