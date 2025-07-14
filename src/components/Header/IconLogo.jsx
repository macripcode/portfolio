import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

import "../../styles/header/icon-logo.css";

function IconLogo({ isClickable = false, onClick }) {
  return (
    <div className={`logo-container ${isClickable ? "clickable" : ""}`} onClick={onClick}>
      <div className="logo-flip-inner">
        <div className="logo-front">
          <img src="/logo-pattern.png" alt="logo" className="logo-img" />
        </div>
        <div className="logo-back">
          <MenuRoundedIcon className="menu-rounded-icon" />
        </div>
      </div>
    </div>
  );
}

export default IconLogo;
