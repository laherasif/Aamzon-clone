import "./Header.css";
import { LocationOn , Search } from '@material-ui/icons'
const Header = () => {
  return (
    <>
      <div className="Container">
        <div className="item">
          <div className="logo">
            <img src="/images/newlogo.png" className="logo_img" alt="logo" />
            <div className="locationWarpper">
              <div className="location">
                <LocationOn />
              </div>
              <div className="texts">
                <div className="text">Delivery to </div>
                <div className="desc">Pakistan </div>
              </div>
            </div>

          </div>
        </div>
        <div className="item">
          <div className="search_bar">
            <select className="search_select">
              <option>All</option>
              <option>All</option>
              <option>All</option>
            </select>
            <input type="text" className="input_search"/>
            <div className="search_icon">
            <Search/>
            </div>
          </div>

        </div>
        <div className="item"> right </div>
      </div>
    </>
  )
};

export default Header;
