import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";

import { Card } from "./Card";

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export class GridItems extends Component {
  render() {
    return (
      <Grid>
        {this.props.activeCategory
          ? this.props.items
              .filter(({ category }) => category === this.props.activeCategory)
              .map((item) => <Card {...item} key={item.id} />)
          : this.props.items.map((item) => <Card {...item} key={item.id} />)}
      </Grid>
    );
  }
}

GridItems.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      rating: PropTypes.object.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  activeCategory: PropTypes.string,
};
