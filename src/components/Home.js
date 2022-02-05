import React, { Component, useState } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import { now, nowLa, nowKs, nowNz, formatDateLa, formatDateKs, formatDateNz } from './DayUtils';

const MyDatePicker = (props) => {
  const [startDate, setStartDate] = useState(new Date());

  const handleChange = date => {
    setStartDate(date);
    props.onChange(date);
  }

  return (
    <DatePicker
      selected={startDate}
      onChange={handleChange}
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
      'Los Angeles': nowLa(),
      'Kansas': nowKs(),
      'New Zealand': nowNz()
    },
    selectDate: {},
    selectedTimezone: 'Local',
  };

  constructor() {
    super();
    this.onValueChange = this.onValueChange.bind(this);
  }

  handleChange = date => {
    this.setState({
      selectDate: {
        'Los Angeles': formatDateLa(date),
        'Kansas': formatDateKs(date),
        'New Zealand': formatDateNz(date)
      }
    });
  }

  onValueChange(event) {
    this.setState({
      selectedTimezone: event.target.value
    });
  }

  render() {
    return (
      // Home
      <div id="home">
        <div></div>
        <div>
          <h1>World Clock:</h1>
          <h3>Current date and time:</h3>
          <ul>
            {Object.entries(this.state.timezonesNow).map(([key, value]) =>
              <li key={key}>
                {key}: {value}
              </li>
            )}
          </ul>
          <h3>Enter a date and time:</h3>
          <MyDatePicker onChange={this.handleChange} />
          <ul>
            {Object.entries(this.state.selectDate).map(([key, value]) =>
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
