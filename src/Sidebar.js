import './Sidebar.css';
import SidebarOption from './SidebarOption';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import LibraryMusicOutlinedIcon from '@material-ui/icons/LibraryMusicOutlined';
import { useDataLayerValue } from './DataLayer';

function Sidebar(){

const[{playlists},dispatch]=useDataLayerValue();
    return(
        <div className='sidebar'>
            <img className='logo' src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt=""/>
             <SidebarOption Icon={HomeOutlinedIcon} title="Home" />
             <SidebarOption Icon={SearchOutlinedIcon} title="Search" />
             <SidebarOption Icon={LibraryMusicOutlinedIcon} title="Your Library" />
            <br/>
            <strong className='sidebar_title' >PLAYLISTS</strong>
             <hr/>
          {playlists?.items?.map(playlist=>(
            <SidebarOption title={playlist.name} />

          ))}
             
             
        </div>
    );
}
export default Sidebar;