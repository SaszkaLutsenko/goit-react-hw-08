import { InfinitySpin } from 'react-loader-spinner';
import style from './Loader.module.css';

const Loader = ({ visible }) => (
  <div className={style.container}>
    <InfinitySpin
    visible={visible}
    color="#808080"
    ariaLabel="Loading..."
    className={style.spinner}
  />
  </div>
  
);

export default Loader;