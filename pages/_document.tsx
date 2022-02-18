import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html className="scroll-smooth" lang="en">
      <Head></Head>
      <body className="bg-black text-white transition-colors">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
