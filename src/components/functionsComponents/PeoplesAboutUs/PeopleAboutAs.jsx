import React from "react";
import classes from "../../pages/About Us/About.module.scss";

const PeopleAboutAs = ({ name, image, title, body }) => {
  return (
    <div className={classes.peopleAboutAs}>
      <div className={classes.peoplePhoto}>
        <hr />
        <p>
          <img src={image} alt="Face People" />
          <br />
          {name}
          <br />
          <span className={classes.personJob}>{title}</span>
        </p>
      </div>
      <div className={classes.bodyPeopleAbout}>
        <p>“{body}”</p>
      </div>
    </div>
  );
};

export default PeopleAboutAs;
