// ProfileDropdown.tsx
'use client'
import { UserData } from '../../../types'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const ProfileDropdown = (props: {
    left?: string, right: string, logoutUser: () => void, toggleDropdown: () => void; userData: UserData | undefined; dropdownVisible: boolean
}) => {
    const router = useRouter()
    const profileClick = (url:string) => {
        localStorage.setItem('clickable','profileDropdown')
        router.push(url)
    }
    
    return (
        <div className={`relative ${props.dropdownVisible ? 'block' : 'hidden'}`}>
            <div className={`absolute ${props.right} mt-2 w-48 rounded-lg shadow-xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none transition-all origin-top-right transform`}>
                {/* User Info */}
                <div className="px-4 py-3 border-b border-gray-100">
                    <p className="text-sm font-medium text-gray-900">{props?.userData?.userName}</p>
                    <p className="text-xs text-gray-500 mt-1">ID: {props?.userData?.UserId}</p>
                </div>
                
                {/* Menu Items */}
                <div className="py-1">
                    {/* <button 
                        onClick={() => profileClick('/userProfile')}
                        className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                        <Image src="/Icons/account-fill-none.png" width={16} height={16} alt="Profile" className="mr-3" />
                        Profile
                    </button>
                    
                    <button 
                        onClick={() => profileClick('/editProfile')}
                        className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                        <Image src="/Icons/edit.png" width={16} height={16} alt="Edit" className="mr-3" />
                        Edit Profile
                    </button> */}
                    
                    <button 
                        onClick={props.logoutUser}
                        className="flex w-full items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                    >
                        <Image src="/Icons/logout.png" width={16} height={16} alt="Logout" className="mr-3" />
                        Log Out
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProfileDropdown;