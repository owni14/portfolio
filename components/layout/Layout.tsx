import { ClickStateProvider } from '../../store/clickState';
import { Props } from '../../types';
import Footer from './Footer';
import Header from './Header';

const Layout = (props: Props) => {
  return (
    <div className='flex content-center justify-center min-h-screen text-white bg-neutral-900 font-google'>
      <div className='w-[1440px] relative'>
        <ClickStateProvider>
          <Header />
          <main className='mb-28'>{props.children}</main>
          <Footer />
        </ClickStateProvider>
      </div>
    </div>
  );
};

export default Layout;
