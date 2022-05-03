import freenowLogo from '../../../assets/images/freenow_logo.png';

const Header = () => {
  return (
    <div className="h-20" data-testid="headerContainer">
      <div className="p-8">
        <img src={freenowLogo} width={160} />
      </div>
    </div>
  );
};

export default Header;
