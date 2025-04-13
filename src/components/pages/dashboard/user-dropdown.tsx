import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Link from 'next/link'
import { LogOut, SquareUser } from 'lucide-react'

export const UserDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex-1 gap-2 justify-start px-2">
          <Avatar className="size-7 block">
            <AvatarImage src="https://github.com/pabloxt14.png" />
            <AvatarFallback>PA</AvatarFallback>
          </Avatar>

          <span>Pablo Alan</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="start"
        className="w-[var(--radix-dropdown-menu-trigger-width)]"
      >
        <Link href="/dashboard/account" passHref>
          <DropdownMenuItem className="gap-2">
            <SquareUser size={16} className="text-current" />
            Configurações da conta
          </DropdownMenuItem>
        </Link>

        <DropdownMenuItem className="gap-2 text-red-500 ">
          <LogOut size={16} className="text-current" />
          Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
