import PropTypes from 'prop-types'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setActive } from '../../redux/slices/navSlice'

const Options = (props) => {
    const dispatch = useDispatch();
    const active = useSelector(state => state.nav.active)
    const darkMode=useSelector(state=>state.nav.darkMode);  

  return (
    <div className={`hover:cursor-pointer flex gap-6 w-[100%] py-3 px-3 ${active===props.id?'bg-[#dbe7dc] text-[#357937] rounded-md':''}`}
      onClick={()=>{dispatch(setActive(props.id));}}
    >
      <div>{props.icon}</div>
      <div>{props.text}</div>
    </div>
  )
}

Options.propTypes = {
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
}

export default Options
