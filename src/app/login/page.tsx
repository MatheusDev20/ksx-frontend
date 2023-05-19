
import sideImage from './login_side.jpg'

export default function Page() {
    console.log(sideImage)
    return (
        <div className='flex h-full'>
            <div className='w-1/2'>
                Form
            </div>

            <div className='w-1/2 h-full bg-cover bg-center' style={{backgroundImage: `url(${sideImage.src})`}} />
        </div>
    )
}