import React, { Component } from 'react';

import { now, now_la, now_ks, now_nz } from './DayUtils';

class Home extends Component {
  state = {
    timezonesNow: {
      'Local': now(),
      'Los Angeles': now_la(),
      'Kansas': now_ks(),
      'New Zealand': now_nz()
    }
  };

  render() {
    return (
      // Home
      <div id="home">
        <div></div>
        <div>
          World Clock:
          <ul>
            {Object.entries(this.state.timezonesNow).map(([key, value]) =>
              <li key={key}>
                {key}: {value}
              </li>
            )}
          </ul>
        </div>
        <div></div>
      </div>
    );
  }
}

export default Home;
