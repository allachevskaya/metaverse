import Factions from '@/components/Factions/Factions'
import Main from '@/components/Main/Main'
import Layout from '@/components/layout/Layout'

import Head from 'next/head'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'

export default function Home() {



  return (
    <ParallaxProvider>
      <Layout title={'DUSKTOPIA'} description={''} keywords={''} >

        <main >
      
        <Main />
        
        <Parallax  speed={5}>
        <Factions/> 
        </Parallax> 
        
          
{/*          
            <Main />
            <Main />

            <Main />
            <Main />
            <Factions/> */}
         {/* <Parallax  speed={15}>
            <Main />
          </Parallax>

          <Parallax  speed={-15}>
            <Main />
          </Parallax>
          <Parallax  speed={15}>
            <Main />
          </Parallax> 
         */}
          {/*  */}


        </main>



      </Layout>

    </ParallaxProvider>
  )
}
