import React from 'react'
import { useState } from 'react'
import Avatar from './Avatar'
import ListOptions from './ListOptions'
import AddList from './AddList'
import Performance from './Performance'
import ProfileOptions from './ProfileOptions'
import { useSelector } from 'react-redux'

const SideBar = () => {
  const darkMode = useSelector(state => state.nav.darkMode)
  const [clicked,setClicked]=useState(false)
  return (
    <div className={`${darkMode ? 'darkMode1' : ''} w-[20vw] flex items-center flex-col`}>
      <div className='absolute hover:cursor-pointer'>
        <div onClick={()=>{setClicked(!clicked)}}><Avatar/></div>
        {clicked && <ProfileOptions />}
      </div>
      <div className='h-[59px]'></div>
      <div className={`${darkMode?'darkMode2':''} w-[100%] bg-[#EEF6EF] flex flex-col items-center`}>
        <p className='pt-[70px]'>Hey, ABCD</p>
        <ListOptions />
        <AddList/>
        <Performance/>
        {/* <Options key={7} icon={AddIcon} text="Add List"/> */}
      </div>
    </div>
  )
}

export default SideBar
