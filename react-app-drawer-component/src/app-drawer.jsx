import React from 'react';
class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { view: 'icon' };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
        <div className='container' onClick={this.handleClick}>
          <div className='row'>
            <div className='column-one-eighth menu-positioning'>
              <div className={this.showIcon()}>
                <i className="fa-solid fa-bars"></i>
              </div>
              <div className={this.showMenu()}>
                <h1 className='menu-content-spacing'>Menu</h1>
                  <ul>
                  <li className='menu-content-spacing'>About</li>
                  <li className='menu-content-spacing'>Get Started</li>
                  <li className='menu-content-spacing'>Sign In</li>
                  </ul>
              </div>
            </div>
          </div>
          <div>
          </div>
          <div className={this.showOverlay()}></div>
        </div>
    );
  }

  handleClick(event) {
    const target = event.target;
    if (target.matches('I')) {
      this.setState({ view: 'menu' });
    } else if (target.matches('.overlay') || target.matches('LI')) {
      this.setState({ view: 'icon' });
    }
  }

  showOverlay() {
    if (this.state.view === 'menu') {
      return 'overlay';
    } else {
      return 'hidden';
    }
  }

  showMenu() {
    if (this.state.view !== 'icon') {
      return '';
    } else {
      return 'hidden';
    }
  }

  showIcon() {
    if (this.state.view === 'icon') {
      return 'icon-spacing';
    } else {
      return 'hidden';
    }
  }

}

export default AppDrawer;
