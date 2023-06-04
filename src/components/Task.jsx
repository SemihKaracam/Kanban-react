import React from 'react'
import Status from './Status'

import { BsThreeDots } from "react-icons/bs"
import { BiCommentDetail } from "react-icons/bi"
import User from './User'

const Task = ({ task }) => {
    return (
        <div className='p-4 bg-white mt-3 rounded-sm text-[12px]'>
            <div className='status-container flex justify-between border-b-[2px] border-lightGray py-1'>
                <div className='flex gap-2'>
                    {
                        task?.tags?.map((tg, index) => (
                            <Status key={index} tagT={tg} />
                        ))
                    }
                </div>
                <BsThreeDots size={20} color='gray' />
            </div>
            <div className='flex justify-between my-2'>
                <div>
                    <span className='block font-[500]'>Request ID</span>
                    <span>{task.id}</span>
                </div>
                <div>
                    <span className='block font-[500]'>Created on</span>
                    <span>{task.createdAt}</span>
                </div>
            </div>

            <div>
                <p className='mb-2'>{task.summary}</p>
                <div className='px-2 py-1 rounded-md bg-lightGray flex justify-between items-center'>
                    <User user={task.user} />
                    <BiCommentDetail size={18} />
                </div>
            </div>

        </div>
    )
}

export default Task