import { useAuthStore } from '@/store/auth.store'
import { Button } from '../ui/button'
import { LogOut } from 'lucide-react'

interface Props {
  className?: string
}

export const BtnLogout = ({ className }: Props) => {


  const { logout } = useAuthStore()

  return (
    <Button className={className} variant={'gqlogout'} onClick={logout}><LogOut /></Button>
  )
}
