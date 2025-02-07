"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Menu, X, Search, ShoppingCart } from 'lucide-react'
import ShopCart from './ShopCart'
import SearchInput from './SerachInput'

const Header = () => {

    const [searchQuery, setSearchQuery] = useState("")

    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { label: 'Man', href: '/man' },
        { label: 'Woman', href: '/woman' },
        { label: 'Kids & Baby', href: '/kids' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 bg-neutral-50 shadow-md z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-around h-16">
                    {/* Logo/Name */}
                    <div className="flex-shrink-0">
                        <Link href={"/"}>
                        <p className="text-2xl font-bold text-green-500">
                            Logo.
                        </p>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-8">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className=" text-gray-700 hover:text-green-500 px-3 py-2 rounded-md text-lg font-bold transition-colors duration-200 "
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Search */}
                    {/*<div className="pt-4 pb-3 border-t border-gray-700">
                        <div className="px-4 flex items-center">
                            <div className="relative w-96">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Search className="h-5 w-5 text-gray-700" aria-hidden="true" />
                                </div>
                                <input
                                    type="text"
                                    name="search"
                                    id="mobile-search"
                                    className="block w-full pl-10 pr-3 py-2 border border-gray-700 rounded-md leading-5 bg-white placeholder-gray-700 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-green-500 focus:border-green-500 text-sm"
                                    placeholder="Search "
                                />
                            </div>
                        </div>
                    </div>
                    */}

                    {/* Desktop Menu */}
                    <div className='hover:text-green-500 cursor-pointer'>
                        <ShopCart />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header