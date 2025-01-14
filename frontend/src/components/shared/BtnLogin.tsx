import { Button } from '../ui/button'
import { LogIn } from 'lucide-react'

interface Props {
  className?: string
}

export const BtnLogin = ({ className }: Props) => {



  return (
    <a href="/auth/login"><Button className={className} variant={'gqlogin'}><LogIn /></Button></a>
  )
}
