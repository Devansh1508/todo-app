import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import logomark from '../../assets/icons/logomark.png'    
import nightmode from '../../assets/icons/nightmode.png'
import options from '../../assets/icons/options.png'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import { setDarkMode, setTile } from '../../redux/slices/navSlice'
import { useDispatch, useSelector } from 'react-redux'  
import { useEffect } from 'react';

const Navbar = () => {
  const darkMode=useSelector(state=>state.nav.darkMode);
  const dispatch=useDispatch();
  const tile=useSelector(state=>state.nav.isTile)

  useEffect(()=>{
    
  },[])

  return (
    <div className={`${darkMode ?"darkMode1":""} flex w-[100vw] justify-between items-center px-10 py-4`}>
      <div className='flex gap-6'>
        <div><MenuOutlinedIcon/></div>
        <div className='flex'><img src={logomark} />
            <p className='text-[#3F9142] font-bold text-3xl'>DoIt</p>
        </div>
      </div>
      <div className='flex gap-6'>
        <div><SearchOutlinedIcon/></div>
        <div className='hover:cursor-pointer' onClick={()=>{dispatch(setTile(!tile))}}>{tile?<ListOutlinedIcon/>:<GridViewOutlinedIcon/>}</div>
      <div className='hover:cursor-pointer' onClick={()=>{dispatch(setDarkMode(!darkMode))}}>{darkMode?<LightModeOutlinedIcon/>:<img src={nightmode}/>}</div>
      </div>
    </div>
  )
}

export default Navbar
