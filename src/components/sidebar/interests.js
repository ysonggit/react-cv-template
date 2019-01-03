import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class LanguageDetails extends Component {
  renderListItem(item) {
    return (
      <li>
        {item.name}: <span className="lang-desc">{item.val}</span>
      </li>
    );
  }
  render() {
    return (
      <div className="languages-container container-block">
        <h2 className="container-block-title">
          <i className="fa fa-code"></i>
          {' '}{this.props.title || 'Skills'}</h2>
        <ul className="list-unstyled interests-list">
          {this.props.list.map((item) => {
            return this.renderListItem(item);
          })}
        </ul>
      </div>
    );
  }
}

LanguageDetails.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired
};

