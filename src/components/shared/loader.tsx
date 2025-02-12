'use client'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { HTMLAttributes } from 'react'
import './loader.css'
interface LoaderProps extends HTMLAttributes<HTMLDivElement> {}

export const Loader = ({ className, ...props }: LoaderProps) => {
  return (
    <div className={cn('relative w-[90px] h-[52.34px]', className)} {...props}>
      <Image src="/images/loading-wrapper.svg" alt="logo" fill />

      <div
        className="absolute left-1/2 top-4 flex -translate-x-1/2"
        id="loader"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}
