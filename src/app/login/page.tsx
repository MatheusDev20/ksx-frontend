
import sideImage from './assets/login_side.jpg'

export default function Page() {
    return (
        <main className='flex flex-col md:flex-row sm:h-full'>
            <aside className='md:w-1/2 sm:w-full sm:h-full flex items-center py-12'>
                <main className='flex flex-col gap-8 p-12 mb-4 w-full'>
                    <h1 className='place-self-center mb-4 font-semibold'>Logo</h1>
                    <h1 className='place-self-center text-2xl'>Welcome to KSX</h1>
                    <form className='flex flex-col gap-5 items-center p-12 justify-items-center'>
                        <div className='flex flex-col w-full items-center p-4'>
                            <div className='flex flex-col gap-2'>
                                <label className='text-sm text-zinc-500 tracking-tighter'>Username or email</label>
                                <input id="email" name="email" type="email" required  className="w-72 p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"  />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='text-sm text-zinc-500 tracking-tighter'>Your password</label>
                                <input name='password' type='password' className="w-72 p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"  />
                                <a className="text-sm mb-10 cursor-pointer no-underline font-medium text-blue-800 hover:text-blue-400 dark:text-primary-500">Forgot password?</a>
                            </div>

                    
                            <button className="w-48 mt-8 text-white bg-blue-800 hover:bg-primary-700 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                        </div>
                    </form>
            
                </main>
            </aside>

            <aside className='md:w-1/2 h-full bg-cover bg-center hidden md:flex' style={{backgroundImage: `url(${sideImage.src})`}} />
        </main>
    )
}