import React from 'react';
import css from './Layout.module.css';
import PropTypes from 'prop-types';

export default function Layout({ children }) {
  return <div className={css.container}>{children}</div>;
}
Layout.propTypes = {
  children: PropTypes.node,
};
