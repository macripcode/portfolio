import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import ClearIcon from '@mui/icons-material/Clear';
import "../../styles/header/logo.css";

const LOGO_SRC = '/logo-pattern.png';

/**
 * Logo component with flip animation for mobile menu
 */
function Logo({ mobile = false, showNav = false, onToggleNav }) {
  // Build dynamic className
  const wrapperClasses = [
    'div-logo-wrapper',
    'gradient',
    'glow',
    mobile && 'clickable',
    mobile && showNav && 'flipped'
  ].filter(Boolean).join(' ');

  const flipInnerClasses = [
    'logo-flip-inner',
    showNav && 'flipped'
  ].filter(Boolean).join(' ');

  // Reusable logo image
  const logoImage = (
    <img src={LOGO_SRC} alt="Portfolio logo" className="logo-img" />
  );

  return (
    <div className="div-logo">
      <div
        className={wrapperClasses}
        onClick={mobile ? onToggleNav : undefined}
        role={mobile ? 'button' : undefined}
        tabIndex={mobile ? 0 : undefined}
        aria-label={mobile ? (showNav ? 'Close menu' : 'Open menu') : undefined}
      >
        {mobile ? (
          <div className="logo-flip-container">
            <div className={flipInnerClasses}>
              <div className="logo-flip-front">{logoImage}</div>
              <div className="logo-flip-back">
                {showNav ? (
                  <ClearIcon className="clear-icon" />
                ) : (
                  <MenuRoundedIcon className="menu-rounded-icon" />
                )}
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
