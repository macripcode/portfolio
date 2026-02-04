import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import "../../styles/header/logo.css";

const LOGO_SRC = '/logo-pattern.png';

/**
 * Logo component with optional menu icon flip animation
 */
function Logo({ isClickable = false, onClick, showMenuIcon = false }) {
  // Build dynamic className
  const wrapperClasses = [
    'div-logo-wrapper',
    'glow',
    isClickable && 'clickable',
    showMenuIcon && 'with-menu-icon'
  ].filter(Boolean).join(' ');

  // Reusable logo image
  const logoImage = (
    <img src={LOGO_SRC} alt="Portfolio logo" className="logo-img" />
  );

  return (
    <div className="div-logo">
      <div
        className={wrapperClasses}
        onClick={isClickable ? onClick : undefined}
        role={isClickable ? 'button' : undefined}
        tabIndex={isClickable ? 0 : undefined}
      >
        {showMenuIcon ? (
          <div className="logo-flip-container">
            <div className="logo-flip-inner">
              <div className="logo-flip-front">{logoImage}</div>
              <div className="logo-flip-back">
                <MenuRoundedIcon className="menu-rounded-icon" />
              </div>
            </div>
          </div>
        ) : (
          logoImage
        )}
      </div>
    </div>
  );
}

export default Logo;
