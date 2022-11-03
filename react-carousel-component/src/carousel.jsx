import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      intervalID: null
    };
    this.showNextIndex = this.showNextIndex.bind(this);
    this.showPreviousIndex = this.showPreviousIndex.bind(this);
    this.showClicked = this.showClicked.bind(this);
  }

  componentDidMount() {
    const intervalID = setInterval(this.showNextIndex, 1000);
    this.setState({ intervalID });
  }

  showNextIndex() {
    this.state.currentIndex === this.props.pokemon.length - 1
      ? this.setState({ currentIndex: 0 })
      : this.setState({ currentIndex: this.state.currentIndex + 1 });
    this.controlInterval();
  }

  showPreviousIndex() {
    this.state.currentIndex === 0
      ? this.setState({ currentIndex: this.props.pokemon.length - 1 })
      : this.setState({ currentIndex: this.state.currentIndex - 1 });
    this.controlInterval();
  }

  selectImage() {
    const currentIndex = this.state.currentIndex;
    return this.props.pokemon[currentIndex].src;

  }

  fillCircle(id) {
    const currentIndex = this.state.currentIndex;
    return id === currentIndex
      ? 'fa-solid fa-circle'
      : 'fa-regular fa-circle';
  }

  showClicked(event) {
    const id = Number.parseInt(event.target.dataset.viewId);
    this.setState({ currentIndex: id });
    this.controlInterval();
  }

  controlInterval() {
    clearInterval(this.state.intervalID);
    const intervalID = setInterval(this.showNextIndex, 3000);
    this.setState({ intervalID });
  }

  renderCircles(props) {
    const pokemon = props;
    const circles = pokemon.map(pokemon => {
      return <i key={pokemon.name} data-view-id={props.indexOf(pokemon)} className={this.fillCircle(props.indexOf(pokemon))}></i>;
    });
    return circles;
  }

  render() {
    return (
      <>
      <div className="container horizontal-center">
        <h1>Choose Your Pokemon!</h1>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='column-one-half'>
            <div className='frame'>
              <div className='row'>
                <div className='column-one-third vertical-center horizontal-center'>
                  <i className="fa-solid fa-chevron-left prev-icon" onClick={this.showPreviousIndex}></i>
                </div>
                <div className='column-one-third horizontal-center'>
                  <img src={this.selectImage()}/>
                </div>
                <div className='column-one-third vertical-center horizontal-center'>
                  <i className="fa-solid fa-chevron-right prev-icon" onClick={this.showNextIndex}></i>
                </div>
              </div>
              <div className='row'>
                <div className='column-full'>
                  <div className='circle-icon-box' onClick={this.showClicked}>
                    {this.renderCircles(this.props.pokemon)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
}
