import React from 'react'


const MainBlock = () => {

  return (


<div className="flex justify-center items-center h-screen w-screen">
  <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mx-auto max-w-7xl h-full">
    <div className="w-full md:w-2/3 bg-blue-500 overflow-y-auto p-4">
      <h1 className="text-white">Первая секция</h1>
      <p className="text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>

    <div className="w-full md:w-1/3 bg-green-500 overflow-y-auto p-4">
      <h1 className="text-white">Вторая секция</h1>
      <p className="text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  </div>
</div>

  
  )
}

export default MainBlock