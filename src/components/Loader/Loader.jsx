import Loader from 'react-js-loader';
import s from './Loader.module.css';

function LoaderComponent() {
  return (
    <>
      <Loader
        type={'bubble-loop'}
        bgColor={'#3f51b5'}
        title={'Loading...'}
        color={'#2a2a2a'}
        size={300}
      />
      <p className={s.LoaderText}></p>
    </>
  );
}

export default LoaderComponent;
