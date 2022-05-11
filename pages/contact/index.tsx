import Link from 'next/link';
import { MainLayout } from '../../components/layouts/MainLayout';

const ContactPage = () => {

  return (
    <MainLayout title="Contact - JMLQ" content="Contact Page" >
        <h1>Contact Page Simplificado</h1>
        <h1 className={'title'}>
            Ir a <Link href="/">Home</Link>
        </h1>
        <p className={'description'}>
            Get started by editing{' '}
            <code className={'code'}>pages/contact.jsx</code>
        </p>
    </MainLayout>
  )
}


export default ContactPage;