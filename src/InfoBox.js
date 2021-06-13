import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import "./InfoBox.css";

function InfoBox({ title, cases, active, isRed, isYellow, total, ...props }) {
  return (
    <Card
      onClick={props.onClick}
      className={`infoBox ${active && "infoBox--selected"} ${
        isRed && "infoBox--red"
      } ${isYellow && "infoBox-yellow"}`}
    >
      <CardContent>
        {/* title---> CoronaVirus Cases */}
        <Typography className="infoBox_title" color="textSecondary">
          {title}
        </Typography>

        {/* Number of cases +120k */}
        <h2
          className={`infoBox_cases ${isYellow && "info-yellow"} ${
            isRed && "info-red"
          }`}
        >
          {cases}
        </h2>

        {/* +1.2M total */}
        <Typography className="infoBox_total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
