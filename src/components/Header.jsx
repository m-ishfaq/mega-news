import { Button, HStack, Image, Input, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch, FaEllipsisV, FaRegBookmark } from 'react-icons/fa'
import { ChevronDownIcon } from '@chakra-ui/icons'
import user from '../assets/user.png'

const Header = () => {
  return (
    <header>
      <div className="left">
        <Link to={'/'}>MEGA.news</Link>
        <nav>
          <Link to={'/categories'}>Categories</Link>
          <Link to={'/videos'}>Videos</Link>
          <Link to={'/contact'}>Contact Us</Link>
          <Link to={'/about'}>About Us</Link>
        </nav>
      </div>
      <div className="right">
        <HStack borderRadius={'4px'}>
          <Button p={'0'} variant={'ghost'}>
            <FaEllipsisV size={'13'} />
          </Button>
          <Input placeholder='Search Anything...' border={'none'} outline={'none'} focusBorderColor='none'/>
          <Button p={'0'} variant={'ghost'}>
            <FaSearch size={'15'} />
          </Button>
        </HStack>

        <HStack>
          <HStack >
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                <Image src={user} w={'35px'} h={"35px"} borderRadius={'4'} />
                Dev360
              </MenuButton>
              <MenuList>
                <MenuItem><Link to={'/profile'} >Profile</Link></MenuItem>
                <MenuItem><Link to={'/settings'} >Settings</Link></MenuItem>
                <MenuItem><Link to={'/logout'} >Logout</Link></MenuItem>
              </MenuList>
            </Menu>
            <Link to={'/profile/saved-posts'} ><FaRegBookmark /></Link>
          </HStack>

        </HStack>
      </div>  
    </header>
  )
}

export default Header