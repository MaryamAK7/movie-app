import React from "react";
import GenreItems from "../../Components/GenreItems/GenreItems.js";
import DateItems from "../../Components/DateItems/DateItems.js";

export default function SideBar() {
  return (
    <div className="sideBar">
      <GenreItems />
      <DateItems />
    </div>
  );
}
