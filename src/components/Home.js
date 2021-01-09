import React, { Component, useState } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import { now, now_la, now_ks, now_nz } from './DayUtils';

const MyDatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      selected={startDate}
      onChange={date => setStartDate(date)}
      showTimeSelect
      showTimeSelectOnly
      timeIntervals={15}
      timeCaption="Time"
      dateFormat="h:mm aa"
    />
  );
};

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
          <MyDatePicker />
        </div>
        <div></div>
      </div>
    );
  }
}

export default Home;
