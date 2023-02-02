import React, { useState, useEffect } from 'react';

// export default class Carousel extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currentIndex: 0,
//       intervalID: null
//     };
//     this.showNextIndex = this.showNextIndex.bind(this);
//     this.showPreviousIndex = this.showPreviousIndex.bind(this);
//     this.showClicked = this.showClicked.bind(this);
//   }

//   componentDidMount() {
//     const intervalID = setInterval(this.showNextIndex, 3000);
//     this.setState({ intervalID });
//   }

//   showNextIndex() {
//     this.state.currentIndex === this.props.pokemon.length - 1
//       ? this.setState({ currentIndex: 0 })
//       : this.setState({ currentIndex: this.state.currentIndex + 1 });
//   }

// showPreviousIndex() {
//   this.state.currentIndex === 0
//     ? this.setState({ currentIndex: this.props.pokemon.length - 1 })
//     : this.setState({ currentIndex: this.state.currentIndex - 1 });
//   this.controlInterval();
// }

//   selectImage() {
//     const currentIndex = this.state.currentIndex;
//     return this.props.pokemon[currentIndex].src;

//   }

//   fillCircle(id) {
//     const currentIndex = this.state.currentIndex;
//     return id === currentIndex
//       ? 'fa-solid fa-circle'
//       : 'fa-regular fa-circle';
//   }

//   showClicked(event) {
//     const id = Number.parseInt(event.target.dataset.viewId);
//     this.setState({ currentIndex: id });
//     this.controlInterval();
//   }

//   controlInterval() {
//     clearInterval(this.state.intervalID);
//     const intervalID = setInterval(this.showNextIndex, 3000);
//     this.setState({ intervalID });
//   }

//   renderCircles(props) {
//     const pokemon = props;
//     const circles = pokemon.map(pokemon => {
//       return <i key={pokemon.name} data-view-id={props.indexOf(pokemon)} className={this.fillCircle(props.indexOf(pokemon))}></i>;
//     });
//     return circles;
//   }

//   render() {
//     return (
//       <>
//       <div className="container horizontal-center">
//         <h1>Choose Your Pokemon!</h1>
//       </div>
//       <div className='container'>
//         <div className='row'>
//           <div className='column-one-half'>
//             <div className='frame'>
//               <div className='row'>
//                 <div className='column-one-third vertical-center horizontal-center'>
//                   <i className="fa-solid fa-chevron-left prev-icon" onClick={this.showPreviousIndex}></i>
//                 </div>
//                 <div className='column-one-third horizontal-center'>
//                   <img src={this.selectImage()}/>
//                 </div>
//                 <div className='column-one-third vertical-center horizontal-center'>
//                   <i className="fa-solid fa-chevron-right prev-icon" onClick={this.showNextIndex}></i>
//                 </div>
//               </div>
//               <div className='row'>
//                 <div className='column-full'>
//                   <div className='circle-icon-box' onClick={this.showClicked}>
//                     {this.renderCircles(this.props.pokemon)}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       </>
//     );
//   }
// }

export default function Carousel({ pokemon }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalID, setIntervalID] = useState(null);

  const reset = () => {
    clearInterval(intervalID);
    const id = setInterval(() => {
      setCurrentIndex(index => {
        if (index === 4) return 0;
        else return index + 1;
      });
    }, 1000);
    setIntervalID(id);
  };

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex(index => {
        if (index === 4) return 0;
        else return index + 1;
      });
      setIntervalID(id);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  const showPreviousIndex = () => {
    currentIndex === 0
      ? setCurrentIndex(pokemon.length - 1)
      : setCurrentIndex(currentIndex - 1);
    reset();
  };

  const showNextIndex = () => {
    currentIndex === pokemon.length - 1
      ? setCurrentIndex(0)
      : setCurrentIndex(currentIndex + 1);
    reset();
  };

  const selectImage = () => {
    return pokemon[currentIndex].src;
  };

  const fillCircle = id => {
    return id === currentIndex
      ? 'fa-solid fa-circle'
      : 'fa-regular fa-circle';
  };

  const showClicked = event => {
    const id = Number(event.target.dataset.viewId);
    setCurrentIndex(id);
    reset();
  };

  const renderCircles = () => {
    const circles = pokemon.map(poke => {
      return <i key={poke.name} data-view-id={pokemon.indexOf(poke)} className={fillCircle(pokemon.indexOf(poke))}></i>;
    });
    return circles;
  };

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
                  <i className="fa-solid fa-chevron-left prev-icon" onClick={showPreviousIndex}></i>
                </div>
                <div className='column-one-third horizontal-center'>
                  <img src={selectImage()} />
                </div>
                <div className='column-one-third vertical-center horizontal-center'>
                  <i className="fa-solid fa-chevron-right prev-icon" onClick={showNextIndex}></i>
                </div>
              </div>
              <div className='row'>
                <div className='column-full'>
                  <div className='circle-icon-box' onClick={showClicked}>
                    {renderCircles()}
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
