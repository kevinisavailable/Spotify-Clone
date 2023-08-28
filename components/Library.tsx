"use client";

import {TbPlaylist} from 'react-icons/tb'
import {AiOutlinePlus} from 'react-icons/ai'

const Library = () => {
  return (
    <div className="flex flex-col">
        <div className="flex justify-between items-center px-4 pt-4">
            <div className="inline-flex items-center gap-x-2">
                <TbPlaylist size={26} className="text-neutral-400" />
                <p className='text-neutral-400 font-medium'>
                    Your Library
                </p>
            </div>
            <AiOutlinePlus size={26} className='text-neutral-400 cursor-pointer hover:text-white transition' />
        </div>
        <div className='flex flex-col gap-y-2 mt-4 px-3'>
            <p>List of Songs!</p>
        </div>
    </div>
  )
}

export default Library