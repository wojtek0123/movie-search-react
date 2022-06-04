import { useEffect, useState } from 'react';
import './Hamburger.scss';

const Hamburger: React.FC<{
	onShowMenu: (isShown: boolean) => void; hideMenu: boolean
}> = (props) => {
	const [isShown, setIsShown] = useState(true);

	const changeShowState = () => {    
		if (!isShown) {
			setIsShown(true);
		} else {
			setIsShown(false);
		}

    props.onShowMenu(isShown);
	};
  
  useEffect(() => {
    if (props.hideMenu) {
      setIsShown(true);
    }

  }, [props.hideMenu])

	return (
		<div className={isShown ? 'hamburger' : 'hamburger active'} onClick={changeShowState}>
			<div className='hamburger-bar'></div>
		</div>
	);
};

export default Hamburger;
