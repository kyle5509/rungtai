import Nav from '@/components/Layout/Nav'
import React from 'react'

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div className='pt-[154px]'>
      <Nav />
      <div className="flex-1">
        {children}
      </div>
    </div>
  )
}
