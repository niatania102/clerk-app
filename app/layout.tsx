
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import './globals.css'
import Header from './components/Header'
import { dark } from '@clerk/themes';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: [dark]
      }}
    >
      <html lang="en">
        <body>
          <Header/>
          <main className="container">
            <div className="flex items-start justify-center min-h-screen">
              <div className='mt-20'>
                {children}
              </div>
            </div>
          </main>
        </body>
      </html>
    </ClerkProvider>
  )
}