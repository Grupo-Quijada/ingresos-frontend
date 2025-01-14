import React from 'react'

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MenuIcon } from 'lucide-react'

interface Props {
  className?: string
}

const cajeroLinks = [
  { name: 'Cargar Comprobante', url: '/cajero' },
  { name: 'Ver Comprobantes', url: '/cajero/ver-comprobantes' },
]
const vendedorLinks = [
  { name: 'Inicio', url: '/vendedor' },
  { name: 'Ver Comprobantes', url: '/cajero/ver-comprobantes' },
]


export const BtnMenu = ({ className }: Props) => {
  const [position, setPosition] = React.useState("bottom")

  return (
    <div className={className}>
      <DropdownMenu >
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className='bg-transparent hover:bg-transparent'><MenuIcon color='white' /></Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 mr-2">
          <DropdownMenuLabel>¿Donde quieres ir?</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup className='flex flex-col gap-y-1  p-2' value={position} onValueChange={setPosition}>
            {
              cajeroLinks.map((link, index) => (
                <a key={index} href={link.url} className='hover:bg-blue-50 transition-all px-2 py-1'>{link.name}</a>
              ))
            }
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
