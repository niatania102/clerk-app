
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import './globals.css'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <main className="container mx-auto">
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