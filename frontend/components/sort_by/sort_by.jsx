import React from 'react';

class SortBy extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.receiveSortByMethod(e.target.value);
  }

  render() {
    const { sortBy } = this.props;
    return(
      <form className="sort-by">
        <label htmlFor="sort-by-select">Sort recipes by:</label>
        <select
          id="sort-by-select"
          defaultValue={sortBy}
          onChange={this.handleChange}>
          <option value="TASTE_ASC">Taste rating - low to high</option>
          <option value="TASTE_DESC">Taste rating - high to low</option>
          <option value="EFFORT_ASC">Effort rating - low to high</option>
          <option value="EFFORT_DESC">Effort rating - high to low</option>
        </select>
      </form>
    );
  }
}

export default SortBy;
