import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Searchbox.module.css';
const { form, Button, SearchFormInput, Searchbar } = css;
export default class Searchbox extends Component {
  state = {
    query: '',
  };
  handlerChange = e => {
    this.setState({ query: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };
  render() {
    return (
      <div className={Searchbar}>
        <form className={form} onSubmit={this.onSubmit}>
          <label>
            <input
              className={SearchFormInput}
              type="text"
              value={this.state.query}
              onChange={this.handlerChange}
            />
          </label>
          <button className={Button} type="submit">
            Search
          </button>
        </form>
      </div>
    );
  }
}
Searchbox.propTypes = {
  onSubmit: PropTypes.func,
};
