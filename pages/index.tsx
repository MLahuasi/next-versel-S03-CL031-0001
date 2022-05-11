// import Head from 'next/head';
import Link from 'next/link';
import { MainLayout } from '../components/layouts/MainLayout';

const HomePage = () => {
  return (
     <MainLayout title="Home - JMLQ" content="Home Page">
           <h1>Home Page Simplificado</h1>
           <h1 className={'title'}>
             Ir a <Link href="/about">About</Link>
           </h1>
           <p className={'description'}>
             Get started by editing{' '}
             <code className={'code'}>pages/index.jsx</code>
           </p>
      </MainLayout>
  )
}

export default HomePage;