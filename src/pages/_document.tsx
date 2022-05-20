import React from 'react';
import { Head, Html, Main, NextScript } from 'next/document';

const MyDocument = () => {
  return (
    <Html lang="ja-JP">
      <Head>{/* TODO */}</Head>
      <body className="theme-green">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
