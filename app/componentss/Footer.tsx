import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Store, Truck, WalletCards } from 'lucide-react'
import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div>
        <footer className="bg-gray-200 text-gray-300">
        <div className='bg-gray-200 flex justify-between p-8'>
                <div className='flex cursor-pointer text-gray-700 hover:text-green-500'>
                    <Store className='mr-1'/>
                    <p>Click & Collect From Store</p>
                </div>
                <div className='flex cursor-pointer text-gray-700 hover:text-green-500'>
                    <Truck className='mr-1'/>
                    <p>Cash On Delivery</p>
                </div>
                <div className='flex cursor-pointer text-gray-700 hover:text-green-500'>
                    <Store className='mr-1'/>
                    <p>Product Replacement at Store</p>
                </div>
                <div className='flex cursor-pointer text-gray-700 hover:text-green-500'>
                    <WalletCards className='mr-1'/>
                    <p>Click & Collect From Store</p>
                </div>
            </div>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-green-500 text-lg font-semibold mb-4">About</h3>
            <p className="text-gray-700 hover:text-green-500 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sunt quibusdam laborum optio deserunt, vitae neque ducimus harum blanditiis facere quisquam iure sed, unde consequuntur qui, minus aspernatur consequatur error?
            </p>    
            </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-green-500 text-lg font-semibold mb-4">Links </h3>
            <ul className="space-y-2">
              <li>
                <Link href={"/man"}>
                    <p className="text-gray-700 hover:text-green-500 transition-colors duration-300">
                        Man
                    </p>
                </Link>
              </li>
              <li>
                <Link href={"/woman"}>
                    <p className="text-gray-700 hover:text-green-500 transition-colors duration-300">
                        Woman
                    </p>
                </Link>
              </li>
              
              <li>
                <Link href={"/kids"}>
                    <p className="text-gray-700 hover:text-green-500 transition-colors duration-300">
                        Kids & Baby
                    </p>
                </Link>
              </li>
              <li>
                <a href="/" className="text-gray-700 hover:text-green-500 transition-colors duration-300">
                  Home
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-green-500 text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-700 hover:text-green-500" />
                <a href="mailto:club.bac@gmail.com" className="text-gray-700 hover:text-green-500 transition-colors duration-300">
                  StoreExample@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-700 hover:text-green-500" />
                <span className="text-gray-700 hover:text-green-500">+212 682052062</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-gray-700 hover:text-green-500" />
                <span className="text-gray-700 hover:text-green-500">Settat, Maroc</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-green-500 text-lg font-semibold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-700 hover:text-green-500 transition-colors duration-300">
                <Facebook className="w-6 h-6" />
              </a>
              
              <a href="#" className="text-gray-700 hover:text-green-500 transition-colors duration-300">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-700 hover:text-green-500 transition-colors duration-300">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-900">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-around items-center">
            <div className="text-sm text-gray-700">
              © 2025 Store. Tous droits réservés.
            </div>
            <div className="text-sm text-gray-700">
              <p>Codded By  <a href="https://www.linkedin.com/in/mouad-sadik-5b8907257/"> Mouad SADIK</a></p>
            </div>
          </div>
        </div>
      </div>
      
    </footer>
    </div>
  )
}

export default Footer