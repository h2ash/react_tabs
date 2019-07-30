import React from 'react';
import './App.css';
import Tabs from './components/Tabs';

class App extends React.Component {
  state = {
    tabs: [
      { title: 'Tab 1', content: 'Some text 1' },
      { title: 'Tab 2', content: 'Some text 2' },
      { title: 'Tab 3', content: 'Some text 3' },
    ],
    activeTab: 0,
  };

  clickOnTab = (value) => {
    this.setState({
      activeTab: value,
    });
  }

  render() {
    const { tabs, activeTab } = this.state;

    return (
      <div className="App">
        <Tabs
          tabs={tabs}
          activeTab={activeTab}
          clickOnTab={this.clickOnTab}
        />
        <section
          className='tab__section'
        >
          {tabs[activeTab].content}
        </section>
      </div>
    );
  }
}

export default App;
