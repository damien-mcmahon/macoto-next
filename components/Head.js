import Head from 'next/head'
const DEFAULT_HEAD = 'Macoto Ltd - UI Development and Consulting'

const AppHead = ({ title = DEFAULT_HEAD }) => (
  <Head>
    <title>{title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="/fonts/fonts.css" />
      <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
  </Head>
);

export default AppHead;