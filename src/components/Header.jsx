import { Button, HStack, Image, Input, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaSearch, FaEllipsisV, FaRegBookmark } from 'react-icons/fa'
import { ChevronDownIcon } from '@chakra-ui/icons'
import toast from 'react-hot-toast'
import data from '../assets/data.json'

const Header = () => {
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  const LogOut = async () => {
    await toast.promise(
      new Promise((resolve, reject) => {
        setTimeout(() => {
          try {
            setIsLoggedOut(!isLoggedOut);
            resolve();
          } catch (error) {
            reject();
          }
        }, 2000);
      }),
      {
        loading: 'Logging Out...',
        success: <b>Logged Out!</b>,
        error: <b>Failed To Log Out.</b>,
      }
    );
  };

  return (
    <header>
      <div className="left">
        <Link to={'/'}>MEGA.news</Link>
        <nav>
          <Link to={'/category'}>Categories</Link>
          <Link to={'/tags'}>Tags</Link>
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
                <Image src={data.images.profile.avatar} w={'35px'} h={"35px"} borderRadius={'4'} />
                {data.images.profile.username}
              </MenuButton>
              <MenuList>
                <MenuItem><Link to={'/profile'} >Profile</Link></MenuItem>
                <MenuItem><Link to={'/settings'} >Settings</Link></MenuItem>
                <MenuItem><Link to={'/sign-in'} >Sign In</Link></MenuItem>
                <MenuItem><Link onClick={LogOut} >Logout</Link></MenuItem>
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