import React, {Component} from 'react';
import API from '../services/dateAPI';
import DateYearClick from './DateYearClick';
import DateYearMessage from './DateYearMessage';

export default class DateYear extends Component {

  constructor() {
    super();
    this.state = {
      isLoading: false,
      date: null,
      year: null,
    }
  }

	handleClickButton = (data) => {
    this.setState({isLoading: true});
    API.getAPIResponse().then((data) => {
      const fullYear = new Date(data.date).getFullYear();
      this.setState({date: data.date, year: fullYear, isLoading: false});
    });
		// handle button click event and state changes here
	}

	render() {
        // complete the necessary application logic here
    const {date, year} = this.state;
		return (
  <div className='container-fluid'>
    <div>
      <center>
        <h2>Date/Year Server</h2>
      </center>
    </div>
    <div className='text-center page-title'>
      <DateYearClick onClickButton = {this.handleClickButton}/>
      {this.state.isLoading ?'Loading...':<DateYearMessage date={date} year={year}/>}
    </div>
  </div>
);

	}
}

