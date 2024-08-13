// next image
import Image from 'next/image';

const Avatar = () => {
  return (
    <div className='hidden relative w-full h-full xl:flex xl:max-w-none'>
      <Image
        src={'/doge1.png'}
        fill
        objectFit='contain'
        alt=''
        className='translate-z-0'
      />
    </div>
  );
};

export default Avatar;
