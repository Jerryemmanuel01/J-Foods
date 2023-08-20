import React, { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function Reservation() {
    const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div className="reservation--section">
      <div className="id--links" id="Reservation"></div>
      <h3 className="reservation--head menu--head">Reservation</h3>

      <form className="reservation--form">
        <div className="form--row">
          <div className="">
            <label className="form--label">Date</label> <br />
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              minDate={new Date()}
              showYearDropdown
              scrollableMonthYearDropdown
              dateFormat="dd/MM/yyyy"
            />
          </div>
          <div className="">
            <label className="form--label">Time</label> <br />
            <select className="time--input">
              <option default></option>
              <option>1.00</option>
              <option>2.00</option>
              <option>3.00</option>
              <option>4.00</option>
              <option>5.00</option>
              <option>6.00</option>
              <option>7.00</option>
              <option>8.00</option>
              <option>9.00</option>
              <option>10.00</option>
              <option>11.00</option>
              <option>12.00</option>
            </select>
            <select name="" id="">
              <option value="">am</option>
              <option value="">pm</option>
            </select>
          </div>
        </div>
        <div className="form--row single">
          <label htmlFor="">People</label>
          <select name="" id="">
            <option></option>
            <option value="">1 person</option>
            <option value="">2 persons</option>
            <option value="">3 persons</option>
            <option value="">4 persons</option>
            <option value="">5 persons</option>
            <option value="">6 persons</option>
          </select>
        </div>

        <div className="form--row">
          <div className="">
            <label htmlFor="">First name</label> <br />
            <input type="text" placeholder="John" />
          </div>
          <div className="">
            <label htmlFor="">Last name</label> <br />
            <input type="text" placeholder="Doe" />
          </div>
        </div>

        <div className="form--row">
          <div className="">
            <label htmlFor="">Email</label> <br />
            <input type="email" placeholder="Johndoe@gmail.com" />
          </div>
          <div className="">
            <label htmlFor="">Last name</label> <br />
            <input type="text" placeholder="+234 356 5256 552" />
          </div>
        </div>

        <div className="form--row single">
          <label htmlFor="">Comments (optional)</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="5"
            placeholder="Add comments here"
          ></textarea>
        </div>
        <div className="form--row single">
          <button type="submit" className="submit">
            Book a table
          </button>
        </div>
      </form>
    </div>
  );
}
