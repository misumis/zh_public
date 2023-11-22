import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  injectGA = () => {
    return null;
  };

  render() {
    return (
      <Html lang='pl'>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=optional'
            rel='stylesheet'
          />
        </Head>
        <body className='relative'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
