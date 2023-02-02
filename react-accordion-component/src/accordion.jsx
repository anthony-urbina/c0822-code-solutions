import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openTopic: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const dataView = event.target.dataset.view;
    const openTopic = this.state.openTopic;
    let topic = dataView;
    if (!event.target.matches('.tab')) {
      return;
    }
    if (dataView === openTopic) {
      topic = null;
    }
    this.setState({ openTopic: topic });
  }

  createList() {
    const topics = this.props.topics;

    const list = topics.map(topic =>
        <div key={topic.title} className="tab" data-view={topic.title}>
          {topic.title}
          <div className={this.showTopic(topic.title)}>
            {topic.text}
          </div>
        </div>
    );
    return <>{list}</>;
  }

  showTopic(dataview) {
    if (this.state.openTopic !== dataview) {
      return 'view-hidden';
    } else {
      return 'view';
    }
  }

  render() {
    return (
      <div className='container' onClick={this.handleClick}>
        <div className='row'>
          <div className='column'>
            {this.createList()}
          </div>
        </div>
      </div>
    );
  }
}
