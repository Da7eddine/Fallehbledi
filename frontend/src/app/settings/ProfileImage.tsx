'use client'
import { useSearchParams } from 'next/navigation';
import ImageUpdate from './uploadImageAction'
import getUser from '../../helpers/getUser';
import ProfileImag from '../../../public/image/achref.jpg'
import Image from 'next/image'
const ProfileImage = () => {
    const searchParams = useSearchParams();
    const id = searchParams.get('id'); 
    const user = getUser()
    
   
  return (
        <div className="p-4  mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 ">
            <div className="items-center sm:flex xl:block 2xl:flex sm:space-x-4 xl:space-x-0 2xl:space-x-4">
                <Image className="mb-4 rounded-lg w-28 h-28 sm:mb-0 xl:mb-4 2xl:mb-0" src={ProfileImag} alt="Jese picture"/>
                <div>
                    <h3 className="mb-1 text-xl font-bold text-gray-900 ">Profile picture</h3>
                    <div className="mb-4 text-sm text-gray-500">
                        JPG, GIF or PNG. Max size of 800K
                    </div>
                    <form action ={ImageUpdate.bind(null,id)}>
                    <div className="flex items-center space-x-4">
                        <label htmlFor="uploadFile1" className="inline-flex cursor-pointer items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-[#058f1a]">
                            <svg className="w-4 h-4 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z"></path><path d="M9 13h2v5a1 1 0 11-2 0v-5z"></path></svg>
                            Upload picture
                            <input name='image' type="file" id='uploadFile1' className="hidden" />
                        </label>
                        <button type="submit" className="py-2 px-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 ">
                            Update
                        </button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
        
  )
}

export default ProfileImage