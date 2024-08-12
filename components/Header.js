// next image
import Image from 'next/image';

// next link
import Link from 'next/link';

// components
import Socials from '../components/Socials';

const Header = () => {
  return (
    <header className='absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8 mt-12'>
          {/* logo */}
          <Link href={'/'} className='relative'>
          <p className='absolute bottom-0 text-center font-bold text-orange-300'>new meme puppy</p>
            <Image
              src={'/logopuppy.ico'}
              width={120}
              height={48}
              alt=''
              priority={true}
            />
          </Link>
          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
