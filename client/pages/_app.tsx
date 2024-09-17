import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { GoogleOAuthProvider } from '@react-oauth/google'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <GoogleOAuthProvider clientId='836669452348-ooi6344qg8urj3e138fl61ajpl39fr6q.apps.googleusercontent.com'>

        <Component {...pageProps} />
      </GoogleOAuthProvider>
    </div>

  );
}
