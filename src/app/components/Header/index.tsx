import Image from "next/image"
import avatar from '../../assets/imgs/fake-avatar.jpg'
import { MyDropdown } from '../Dropdown'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { BsChatLeftText } from 'react-icons/bs'
import { AiOutlineSearch } from 'react-icons/ai'


export const Header = (): JSX.Element => {
    return (
        <header className='flex-1 flex justify-between border-b-[1.5px] border-solid border-gray-200 p-4 h-20'>
        {/* Search Input */}
          {/* <div className='flex rounded-xl bg-[#E5E4E2] place-self-center ml-12'>
            <div className='flex w-1/6 items-center justify-center'>
              <AiOutlineSearch size={18} className='place-self-center'/>
            </div>
            <input type="text" className="rounded-xl no-underline bg-[#E5E4E2] text-sm block w-5/6 p-2.5 outline-none ring-0" placeholder="Pesquisar..."/>
          </div> */}
          <div>Something</div>
          {/* Logged user Avatar */}
          <div className='flex gap-12'>
            <div className='flex gap-6 items-center'>
            {/* Icons */}
              <IoIosNotificationsOutline size={24} className='text-gray-500 font-semibold cursor-pointer hover:text-blue-800'/>
              <BsChatLeftText className='text-gray-500 font-semibold cursor-pointer hover:text-blue-800'/>
            </div>
          <div className='flex gap-6'>
              <Image src={avatar} className='w-8 h-8 md:w-10 md:h-10 rounded-full cursor-pointer' alt='me' />

              <div className='flex-col justify-center hidden md:flex'>
                <span className='text-sm text-blue-800 font-bold'>Matheus de Paula</span>
                <span className='text-gray-400 font-semibold text-xs place-self-start'>Admin</span>
              </div>

              <div className='place-self-center'>
                <MyDropdown />
              </div>
            </div>
          </div>
      </header>
    )
}