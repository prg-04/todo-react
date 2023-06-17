import { useState, useRef} from 'react';
import { OnClickOutside } from './onClickOutside';

const Navbar = () => {
  const [dropDown, setDropDown] = useState(false);
  const ref = useRef();

  OnClickOutside(ref, dropDown, () => setDropDown(false));

  return (
    <nav className="navbar">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li ref={ref}>
          <button onClick={() => setDropDown((prev) => !prev)}>
            Service <span>&#8595;</span>
          </button>
          {dropDown && (
            <ul className='dropdown'>
              <li>Design</li>
              <li>Development</li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
