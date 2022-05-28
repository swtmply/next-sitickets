import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html className="scroll-smooth" lang="en">
      <Head></Head>
      <body className="bg-royal-400 text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
