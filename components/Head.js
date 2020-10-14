import Head from 'next/head'
const DEFAULT_HEAD = 'Macoto Ltd - UI Development and Consulting'
const DEFAULT_DESCRIPTION = 'Macoto - UI Development, Consulting and Prototype development'

const AppHead = ({ title = DEFAULT_HEAD, description = DEFAULT_DESCRIPTION }) => (
  <Head>
    <title>{title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preload" href="/fonts/jb-mono.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
    <link rel="preload" href="/fonts/lato-bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
    <link rel="preload" href="/fonts/lato-regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
    <link rel="preload" href="/fonts/lato-semibold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
    <link rel="stylesheet" href="/fonts/fonts.css" />
    <link key="apple-touch" rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
    <link key="icon32" rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
    <link key="icon64" rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
    <meta name="Description" content={description}></meta>
  </Head>
);

export default AppHead;