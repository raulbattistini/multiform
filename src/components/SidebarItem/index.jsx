import React from 'react'
import { Link } from 'react-router-dom'
import * as C from './style'
import { ReactComponent as BookIcon } from '../../svgs/book.svg'
import { ReactComponent as ProfileIcon } from '../../svgs/profile.svg'
import { ReactComponent as MailIcon } from '../../svgs/mail.svg' 
export const SidebarItem = ({
  title,
  description,
  icon,
  path,
  active
}) => {
  return (
    <C.Container> 
      <Link to={path}>
        <C.Info>
        <C.Title>  {title}  </C.Title>
        <C.Description>{description}</C.Description>
        </C.Info>
        <C.IconArea  >
          {icon === 'profile' &&
            <ProfileIcon fill="white" width={25} height={25}/>
          }
          {icon === 'book' &&
            <BookIcon fill="white" width={25} height={25}/>
          }
          {icon === 'mail' &&
            <MailIcon fill="white" width={25} height={25}/>
          } 
        </C.IconArea>
        <C.Point active={active}></C.Point>
      </Link>
    </C.Container>
  )}

export default SidebarItem;