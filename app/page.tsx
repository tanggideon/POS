import SubmitBtn from '@/components/FormCOmponents/SubmitBtn'
import TextInput from '@/components/FormCOmponents/TextInput'
import Image from 'next/image'

const Home = () => {
  return (
    <div className='flex-1 w-full h-[100vh] bg-[url(/assets/images/background1.jpg)] bg-cover bg-no-repeat'>
      <div className='flex-1 h-[calc(100vh-5rem)] flex flex-col items-center justify-center p-4'>
        <div className='w-full md:w-1/3 bg-white h-[90%] shadow-lg py-4 px-10 rounded-lg flex flex-col gap-10 justify-around'>
          <div className='flex items-center justify-center flex-col gap-5 w-full'>
            <h1 className='font-bold text-xl'>Admin Login</h1>
            <Image src="/assets/icons/avatar.png" alt='avatar' height={100} width={100}/>
          </div>
          <div className='flex flex-col gap-8'>
            <TextInput placeholder='Enter Username' label='Username'/>
            <TextInput type='password' placeholder='Enter Password' label='Password'/>
            <SubmitBtn label="Login"/>
          </div>
          <div>

          </div>
        </div>
      </div>
      <div className='w-full h-20 bg-black bg-opacity-50 text-white flex items-center justify-center'>
        <span className='text-xs font-semibold'>
          &copy; {new Date().getFullYear()} Powered by T&N Digital. All rights reserved.
        </span>
      </div>
    </div>
  )
}

export default Home