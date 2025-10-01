import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from './ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'
import { LinkIcon, LogOut } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'



const Header = () => {
    const user = false
    const navigate = useNavigate()

  return (
    <nav className='py-4 flex justify-between items-center'>
        <Link to="/">
            <img src='/logo-main.png' className='h-16' alt='Trimrr logo'/>
        </Link>
        {!user 
        ?
        <Button onClick={() => navigate("/auth")}>Login</Button>
        :
        (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>GP</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Gaurav Purohit</DropdownMenuLabel>
                <DropdownMenuItem>
                <LinkIcon className='mr-2 h-4 w-4'/>
                    My Links
                </DropdownMenuItem>
                <DropdownMenuItem className='text-red-400'>
                <LogOut className='mr-2 h-4 w-4'/>
                    <span>Logout</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
        )

        }
    </nav>
)}

export default Header