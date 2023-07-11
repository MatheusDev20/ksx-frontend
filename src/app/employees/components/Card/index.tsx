import React from 'react'

export const EmployeeCard = (): React.JSX.Element => {
  return (
    <div className="max-w-full border-solid border flex flex-col">
      <header>
        <input type="checkbox" />
        <span>Label Active</span>
        <span>More details</span>
      </header>

      <main className="flex flex-col">
        <h1>Avatar</h1>
        <span>Name</span>
        <span>Role</span>
      </main>

      <footer>More info</footer>
    </div>
  )
}
