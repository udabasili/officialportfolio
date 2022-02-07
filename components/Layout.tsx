import Head from 'next/head'
import Navigation from './Navigation'
import React, {FC} from 'react';

interface IProps {
  title: string;
}
const Layout:FC<IProps> = ({
  children,
  title
})  => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{title} Page | Udendu Portfolio</title>
        <link 
        href="https://fonts.googleapis.com/css2?family=Bangers&family=Quicksand:wght@300;400;500;600&display=swap" 
        rel="stylesheet"/> 
        <meta
        name="description"
        content="The official portfolio for Udendu Abasili"
        />
        <meta name="robots" content="index, follow"/>
        <meta name="viewport" content="width=device-width,initial-scale=1.0"></meta>
      </Head>
      <Navigation/>
      <main className="main">
        {children}
      </main>
    </>
  )
}

export default Layout