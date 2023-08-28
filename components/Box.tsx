import {twMerge} from 'tailwind-merge'

interface BoxProps {
    children : React.ReactNode;
    classnames? : string;
}

const Box : React.FC<BoxProps> = ({children , classnames}) => {
  return (
    <div className={twMerge(`bg-neutral-900 rounded-lg h-fit w-full` , classnames)}>
        {children}
    </div>
  )
}

export default Box