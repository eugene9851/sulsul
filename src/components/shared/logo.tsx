import { cn } from '@/lib/utils'
import Image from 'next/image'
import { HTMLAttributes } from 'react'
interface LogoProps extends HTMLAttributes<HTMLDivElement> {}

export const Logo = ({ className, ...props }: LogoProps) => {
  return (
    <div className={cn('relative w-[92px] h-[22px]', className)} {...props}>
      <Image alt="sulsul logo" src="/images/logo.png" fill />
    </div>
  )
}
