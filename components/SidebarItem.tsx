import Link from 'next/link'
import  {IconType} from 'react-icons'
import  {twMerge} from 'tailwind-merge'

interface SidebarItemProps {
    label : string
    icon : IconType
    href : string
    active? : boolean
}

const SidebarItem : React.FC<SidebarItemProps>= ({label , icon : Icon, href , active}) => {
  return (
    <Link href={href} className={twMerge(`flex flex-row items-center w-full h-auto gap-x-4 font-medium hover:text-white transition text-neutral-400 py-1` , active && 'text-white')}>
        <Icon size={26} />
        <p className='truncate w-full'>{label}</p> 
    </Link>

  )
}

export default SidebarItem