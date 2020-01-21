import React from "react";

class CompoundPagination extends React.Component {
  constructor(props) {
    super(props);
    let computedVisiblePages = props.visibleItems;
    if(props.visibleItems>props.totalPages) {
      computedVisiblePages = props.totalPages;
    }
    this.state = {
      list: Array(...Array(computedVisiblePages)).map((_, i) => i + 1),
      middleIndex: Math.floor(props.visibleItems / 2 + (props.visibleItems % 2))
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentPage !== this.props.currentPage) {
      if (this.props.currentPage > this.state.list[this.state.middleIndex]) {
        const list = this.state.list.slice();
        const lastValue = list.slice(-1)[0] + 1;
        if ( lastValue<=this.props.totalPages) {
          list.shift();
          const value = list.slice(-1)[0] + 1;
          list.push(value);
          this.setState({
            list
          });
        }
      }
    }
  }

  render() {
    return this.props.children({
      pages: this.state.list
    });
  }
}

export default CompoundPagination;
