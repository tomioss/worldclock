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
      timeFormat="h:mm aa"
      timeIntervals={15}
      timeCaption="time"
      dateFormat="MM/dd/yyyy h:mm aa"
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
          <h1>World Clock:</h1>
          <ul>
            {Object.entries(this.state.timezonesNow).map(([key, value]) =>
              <li key={key}>
                {key}: {value}
              </li>
            )}
          </ul>
          <h3>Enter a date and time:</h3>
          <MyDatePicker />
        </div>
        <div></div>
      </div>
    );
  }
}

export default Home;
