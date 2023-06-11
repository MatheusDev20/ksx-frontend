export const Header = (): JSX.Element => {
    return (
        <header className='flex-1 flex justify-between border-b-2 border-solid border-gray-200 p-2 h-14'>
        {/* Search Input */}
        <div>
           Header inside header
        </div>
  
        <div className='flex gap-6'>
          {/* Icons */}
          <span>Icones</span>
          {/* Logged user Avatar */}

          <div>
            User Avatar
          </div>
        </div>
      </header>
    )
}