import React, { useContext } from "react";
import { StateContext } from "../../Context/StateProvider.js";
import Dropdown from "react-bootstrap/Dropdown";
import './DateItems.css';

export default function DateItems() {
  const [, dispatch] = useContext(StateContext);

  const dates = [2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011];

  const handleClick = async (id) => {
    const data = await (
      await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=d2fa7ad1e26af0847d349d7dbd5f93e5&language=en-US&primary_release_year=${id}&page=1`
      )
    ).json();
    dispatch({ type: "SET_Movies", payload: data.results });
  };

  return (
    <div>
      <Dropdown className="dropdown">
        <Dropdown.Toggle variant="success" className='drop-date'>Release Date</Dropdown.Toggle>
        <Dropdown.Menu>
          {dates.map((date) => {
            return (
              <Dropdown.Item
                key={date}
                href="#/action-1"
                onClick={() => handleClick(date)}
              >
                {date}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
