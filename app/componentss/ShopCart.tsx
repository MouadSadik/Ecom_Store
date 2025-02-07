import React from 'react'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { ShoppingCart, Trash } from 'lucide-react'
import { useCart } from '../context/CartContext'


const ShopCart = () => {

  const { cart, removeFromCart } = useCart()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="relative cursor-pointer">
          <ShoppingCart />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              {cart.length}
            </span>
          )}
        </div>
      </SheetTrigger>
      <SheetContent className="flex flex-col h-full">
        <SheetHeader>
          <SheetTitle className='text-green-500'>LOGO.</SheetTitle>
          <SheetDescription>
            You can confirm your commande here.
          </SheetDescription>
        </SheetHeader>

        <div className="flex-grow overflow-y-auto">
          {cart.length === 0 ? (
            <p className="text-lg font-medium text-center">No Product</p>
          ) : (
            cart.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-2 border-b">
                <img src={item.product.src} alt={item.product.title} className="w-12 h-12 rounded-md object-cover" />
                <div className="flex-1 ml-2">
                  <p className="font-medium">{item.product.title}</p>
                  <p className="text-sm text-gray-600">{item.product.price} MAD</p>
                </div>
                <button onClick={() => removeFromCart(item.key)} className="text-red-500">
                  <Trash size={18} />
                </button>
              </div>
            ))
          )}
        </div>
        
        <SheetFooter className='mt-auto'>
          <SheetClose asChild>
            <Button className='bg-green-500 w-full' type="submit">Confirm</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export default ShopCart