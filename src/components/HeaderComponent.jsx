import { contactUsSource } from '../store/contactSource';
import { ButtonComponent } from './Button';

export function Header() {
  return (
    <div className='backdrop-blur-sm w-full'>
      <div className='flex flex-col sm:flex-row justify-between px-4 sm:px-20 md:px-40 lg:px-100 pt-4 pb-2 bg-white'>
        <div className='flex justify-center items-center text-lg font-bold'>
          <img className="rounded-full w-12 h-12 sm:w-16 sm:h-16" src="/assets/org_logo.jpg" alt="sak logo" />
        </div>
        <div className='hidden sm:block'>
          <ButtonComponent text={"Contact Us"} onClick={() => window.location.href = contactUsSource} />
        </div>
      </div>
    </div>
  );
}
