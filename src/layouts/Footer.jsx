import React from 'react'

const Footer = () => {
  return (
    <footer className='flex flex-col-reverse tablet:flex-row text-center p-5 gap-4'>
        <span>
            &copy; 2024
        </span>
        <ul className='flex flex-col tablet:flex-row gap-4'>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Email</li>
            <li>RSS feed</li>
            <li>Add to Feedly</li>
        </ul>
    </footer>
  )
}

export default Footer