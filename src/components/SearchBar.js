import React from 'react';

class SearchBar extends React.Component {
  state = {
    term: null
  }
  onFormSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  }
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={(e) => this.onFormSubmit(e)}>
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({term: e.target.value})}/>
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
