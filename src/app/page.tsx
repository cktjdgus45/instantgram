import AuthenticateArea from './components/AuthenticateArea';
import MainBar from './components/MainBar';
import SideBar from './components/SideBar';

export default function Home() {
  return (
    <div className='w-full flex justify-center'>
      <AuthenticateArea>
        <div className='flex'>
          <MainBar />
          <SideBar />
        </div>
      </AuthenticateArea>
    </div>
  )
}
