"use client"
import { Search } from 'lucide-react'
import React, { useState } from 'react'

interface SearchInputProps {
    onSearch: (query: string) => void;
}




const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchTerm(value);
        onSearch(value);
    };
    return (
        <div className="pt-4 pb-3 ">
            <div className="px-4 flex items-center">
                <div className="relative w-96">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-gray-700" aria-hidden="true" />
                    </div>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearch}
                        className="block w-full pl-10 pr-3 py-2 border border-gray-700 rounded-md leading-5 bg-white placeholder-gray-700 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 text-sm"
                        placeholder="Search products..."
                    />
                </div>
            </div>
        </div>
    )
}

export default SearchInput