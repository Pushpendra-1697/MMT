import React from "react";
import "./widgetStyle.css";

const Widget = ({ onSubmit }) => {
  const bringSuggestion = () => {
    document.querySelector(".popup").style.display = "block";
  };

  return (
    <div>
      <input
        id="search"
        type="text"
        placeholder="Search for the name of a bus service, flight service or a hotel"
        autoComplete="off"
        onFocus={bringSuggestion}
      />
      <input type="submit" value="Search" onClick={onSubmit} />
      <section className="popup">
        <aside>
          <input type="radio" name="category" value="Buses" />
          <label> Buses </label>
        </aside>
        <aside>
          <input type="radio" name="category" value="Flights" />
          <label> Flights </label>
        </aside>
        <aside>
          <input type="radio" name="category" value="Hotels" />
          <label> Hotels </label>
        </aside>
        <aside>
          <input type="radio" name="category" value="All" />
          <label> All </label>
        </aside>
      </section>
    </div>
  );
};

export default Widget;
