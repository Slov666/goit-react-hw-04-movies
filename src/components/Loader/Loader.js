import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import css from './Loader.module.css'

export default class App extends React.Component {
  render() {
    return (
      <div className="box-loader">
        <Loader className={css.loader} type="TailSpin" color="#00BFFF" height={300} width={300} />
      </div>
    );
  }
}
