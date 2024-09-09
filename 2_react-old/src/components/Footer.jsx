import React from 'react'

const Footer = () => {
    const date = new Date();
  return (
    <footer className="mx-5 mt-auto text-white text-center py-2 bg-black">
        &copy; {date.getFullYear()}{" "} MMSIT All rights reserved.
    </footer>
  )
}

export default Footer