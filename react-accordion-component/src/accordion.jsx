import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: { title: null, active: null }
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const dataView = event.target.dataset.view;
    const replacement = { title: dataView, active: null };

    event.target.matches('.tab') &&
      this.state.currentView.active && dataView === this.state.currentView.title
      ? replacement.active = false
      : replacement.active = true;

    let stateCopy = this.state.currentView;
    stateCopy = replacement;
    this.setState({ currentView: stateCopy });
  }

  showHTML() {
    return this.state.currentView.title === 'html' && this.state.currentView.active === true && this.props.topics[0].text;
  }

  showCSS() {
    return this.state.currentView.title === 'css' && this.state.currentView.active === true && this.props.topics[1].text;
  }

  showJS() {
    return this.state.currentView.title === 'javascript' && this.state.currentView.active === true && this.props.topics[2].text;
  }

  render() {
    return (
      <div className='container' onClick={this.handleClick}>
        <div className='row'>
          <div className='column'>
            <div className='tab' data-view="html">
              HyperText Markup Language
              <div className='view'>
                {this.showHTML()}
              </div>
            </div>
            <div className='tab' data-view="css">
              Cascading Style Sheets
              <div className='view'>
                {this.showCSS()}
              </div>
            </div>
            <div className='tab' data-view="javascript">
              JavaScript
              <div className='view'>
                {this.showJS()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
