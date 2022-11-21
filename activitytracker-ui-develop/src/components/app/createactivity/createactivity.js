import React from 'react';
import './createactivity.scss';
import { Button,Row } from 'react-bootstrap';

function CreateActivity() {
  return (
    <div className='content'>
      Create New Activity

      <div className='self'>
        <label id='self'>
          <input className='checkbox' type={"checkbox"}></input>Self
        </label>
      </div>

      <form className='form'>
        <legend>
          <div className='form-row'>
            <label>Description</label>
            <input id='desc' type={"text"} placeholder={"Description"} maxLength="250" minLength="1"></input>
          </div>

          <div className='form-row' id="assign">
            <label>Assign To</label>
            <select>
              <option>Self</option>
              <option>Manager</option>
            </select>
            <div className="drop-down">
              <span className="material-symbols-outlined">expand_circle_down</span>
            </div>
          </div>

          <div className='form-row-date'>
            <Row>
              <label className='startdate'>Start Date</label>
              <input className='date1' type={"date"}></input>

              <label className='enddate'>End Date</label>
              <input className='date2' type={"date"}></input>
            </Row>
          </div>

          <div className='form-row-approval'>
            <label className='approval'>Need approval by</label>
            <select className='approve'>
              <option>Abhishek</option>
              <option>Vasu</option>
            </select>
            <div className="drop-down">
              <span id='circle' className="material-symbols-outlined">expand_circle_down</span>
            </div>
          </div>

          <div className='button'>
            <Button className='submit' type='submit'>Create</Button>
            <Button className='discard' type='reset'>Discard</Button>
          </div>

        </legend>
      </form>

    </div>
  )
}

export default CreateActivity;