import AddIcon from '@mui/icons-material/Add';
import { useSelector } from 'react-redux';

const AddList = () => {
  const darkMode = useSelector(state => state.nav.darkMode)
  return (
    <div className={`${darkMode?'darkMode1':''} flex bg-white gap-6 w-[80%] my-4 py-3 px-3 items-center`}> 
      <div><AddIcon fontSize='large'/></div>
      <div>AddList</div>
    </div>
  )
}

export default AddList
