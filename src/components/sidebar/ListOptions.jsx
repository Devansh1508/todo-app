import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Options from '../common/Options';
import AssignmentIcon from '@mui/icons-material/Assignment';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import PersonIcon from '@mui/icons-material/Person';
import { useSelector } from 'react-redux';

const ListOptions = () => {
  const options = [
    { icon: <AssignmentIcon/>, text: "All task" },
    { icon: <CalendarTodayIcon />, text: "Today" },
    { icon: <StarOutlineIcon/>, text: "Important" },
    { icon: <PersonIcon/>, text: "Assigned to me" },
    
  ];
  const darkMode = useSelector(state => state.nav.darkMode);
  return (
    <div className={`${darkMode?'darkMode1':''} w-[80%] bg-white`}>
        {options.map((option, index) => (
          <Options key={index} id={index} icon={option.icon} text={option.text} />
        ))}
    </div>
  )
}

export default ListOptions
