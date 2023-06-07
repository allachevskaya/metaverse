import React, { useState } from 'react';

import Head from "next/head";
import Header from '../Header/Header';


interface PropsLayout {
    children: JSX.Element,
    title: string
    description: string
    keywords: string
}


const Layout: React.FC<PropsLayout> = ({ children, title, description, keywords }) => {
  

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="theme-color" content="#000000" />
                <meta name="keywords" content={keywords} />
                <meta
                    name="description"
                    content={description}
                />
            </Head>
            <Header />
           
                {children}
            

            {/* <Footer /> */}
        </>
    );
};

export default Layout;