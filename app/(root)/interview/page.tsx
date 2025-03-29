import React from 'react'
import Agent from '@/components/Agents'
import { redirect } from 'next/navigation'

const page = () => {
  return (
    <>
         <h3>Interview Generation</h3>
         <Agent userName="You" userId="user1" type="generate"/>
    </>
  )
}

export default page
