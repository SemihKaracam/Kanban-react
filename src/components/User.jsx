import React from 'react'

const User = ({user}) => {
    return (
        <div className='flex items-center gap-2'>
            <div className='w-[32px] h-[32px]'>
                <img className='object-cover w-full h-full rounded-[50%]' src={user.image} alt="" />
            </div>
            <span>{user.name}</span>
        </div>
    )
}

export default User