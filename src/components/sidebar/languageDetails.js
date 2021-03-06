import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class LanguageDetails extends Component {
  renderListItem(item, i) {
    return (
      <li key={`language_item_${i}`}>
        <a href={`//${item.url}`} target="_blank"> {item.name} </a>
        <span className="lang-desc">  ({item.level})</span>
      </li>
    );
  }
  render() {
    return (
      <div className="languages-container container-block">
        <h2 className="container-block-title" key="lang_header">
          <i class="fa fa-certificate"></i>
          {' '}{this.props.title || 'Certifications'}
        </h2>
        <ul className="list-unstyled interests-list" key="lang_list">
          {this.props.list.map((item, i) => {
            return this.renderListItem(item, i);
          })}
        </ul>
      </div>
    );
  }
}

LanguageDetails.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  title: PropTypes.string.isRequired
};
