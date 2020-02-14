import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
// @material-ui/core icons
import Person from "@material-ui/icons/Person";
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
import Check from "@material-ui/icons/Check";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Table from "components/Table/Table.js";
import Button from "components/CustomButtons/Button.js";

import style from "assets/jss/material-kit-pro-react/views/componentsSections/contentAreas.js";



const useStyles = makeStyles(style);

export default function SectionContentAreas() {
  const [checked, setChecked] = React.useState([1, 3, 5]);
  const handleToggle = value => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  const classes = useStyles();
  const fillButtons = [
    { color: "info", icon: Person },
    { color: "success", icon: Edit },
    { color: "danger", icon: Close }
  ].map((prop, key) => {
    return (
      <Button justIcon size="sm" color={prop.color} key={key}>
        <prop.icon />
      </Button>
    );
  });
  const simpleButtons = [
    { color: "info", icon: Person },
    { color: "success", icon: Edit },
    { color: "danger", icon: Close }
  ].map((prop, key) => {
    return (
      <Button simple justIcon size="sm" color={prop.color} key={key}>
        <prop.icon />
      </Button>
    );
  });
  const roundButtons = [
    { color: "info", icon: Person },
    { color: "success", icon: Edit },
    { color: "danger", icon: Close }
  ].map((prop, key) => {
    return (
      <Button round justIcon size="sm" color={prop.color} key={key}>
        <prop.icon />
      </Button>
    );
  });
  return (
    <div className="cd-section" id="contentAreas">
      <h2>Content Areas</h2>
      <div id="tables">
        <div className={classes.title}>
          <h3>Tables</h3>
        </div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <h4>Simple Table</h4>
          </GridItem>
          <GridItem
            xs={12}
            sm={10}
            md={8}
            className={classes.mrAuto + " " + classes.mlAuto}
          >
            <h4>
              <small>Simple With Actions</small>
            </h4>
            <Table
              tableHead={[
                "#",
                "Name",
                "Job Position",
                "Since",
                "Salary",
                "Actions"
              ]}
              tableData={[
                [
                  "1",
                  "Andrew Mike",
                  "Develop",
                  "2013",
                  "€ 99,225",
                  fillButtons
                ],
                ["2", "John Doe", "Design", "2012", "€ 89,241", roundButtons],
                ["3", "Alex Mike", "Design", "2010", "€ 92,144", simpleButtons],
                [
                  "4",
                  "Mike Monday",
                  "Marketing",
                  "2013",
                  "€ 49,990",
                  roundButtons
                ],
                [
                  "5",
                  "Paul Dickens",
                  "Communication",
                  "2015",
                  "€ 69,201",
                  fillButtons
                ]
              ]}
              customCellClasses={[
                classes.textCenter,
                classes.textRight,
                classes.textRight
              ]}
              customClassesForCells={[0, 4, 5]}
              customHeadCellClasses={[
                classes.textCenter,
                classes.textRight,
                classes.textRight
              ]}
              customHeadClassesForCells={[0, 4, 5]}
            />
            <h4>
              <small>Striped With Checkboxes</small>
            </h4>
            <Table
              striped
              tableHead={[
                "#",
                "",
                "Product Name",
                "Type",
                "Qty",
                "Price",
                "Amount"
              ]}
              tableData={[
                [
                  "1",
                  <Checkbox
                    key={81267378}
                    checked={checked.indexOf(1) !== -1}
                    tabIndex={-1}
                    onClick={() => handleToggle(1)}
                    checkedIcon={<Check className={classes.checkedIcon} />}
                    icon={<Check className={classes.uncheckedIcon} />}
                    classes={{
                      checked: classes.checked,
                      root: classes.checkRoot
                    }}
                  />,
                  "Moleskine Agenda",
                  "Office",
                  "25",
                  "€ 49",
                  "€ 1,225"
                ],
                [
                  "2",
                  <Checkbox
                    key={81267378}
                    checked={checked.indexOf(2) !== -1}
                    tabIndex={-1}
                    onClick={() => handleToggle(2)}
                    checkedIcon={<Check className={classes.checkedIcon} />}
                    icon={<Check className={classes.uncheckedIcon} />}
                    classes={{
                      checked: classes.checked,
                      root: classes.checkRoot
                    }}
                  />,
                  "Stabilo Pen",
                  "Office",
                  "30",
                  "€ 10",
                  "€ 300"
                ],
                [
                  "3",
                  <Checkbox
                    key={564267512}
                    checked={checked.indexOf(3) !== -1}
                    tabIndex={-1}
                    onClick={() => handleToggle(3)}
                    checkedIcon={<Check className={classes.checkedIcon} />}
                    icon={<Check className={classes.uncheckedIcon} />}
                    classes={{
                      checked: classes.checked,
                      root: classes.checkRoot
                    }}
                  />,
                  "A4 Paper Pack",
                  "Office",
                  "50",
                  "€ 10.99",
                  "€ 109"
                ],
                [
                  "4",
                  <Checkbox
                    key={5642675122}
                    checked={checked.indexOf(4) !== -1}
                    tabIndex={-1}
                    onClick={() => handleToggle(4)}
                    checkedIcon={<Check className={classes.checkedIcon} />}
                    icon={<Check className={classes.uncheckedIcon} />}
                    classes={{
                      checked: classes.checked,
                      root: classes.checkRoot
                    }}
                  />,
                  "Apple iPad",
                  "Communication",
                  "10",
                  "€ 499.00",
                  "€ 4,990"
                ],
                [
                  "5",
                  <Checkbox
                    key={56426751223}
                    checked={checked.indexOf(5) !== -1}
                    tabIndex={-1}
                    onClick={() => handleToggle(5)}
                    checkedIcon={<Check className={classes.checkedIcon} />}
                    icon={<Check className={classes.uncheckedIcon} />}
                    classes={{
                      checked: classes.checked,
                      root: classes.checkRoot
                    }}
                  />,
                  "Apple iPhone",
                  "Communication",
                  "10",
                  "€ 599.00",
                  "€ 5,999"
                ],
                {
                  total: true,
                  colspan: "5",
                  amount: (
                    <span>
                      <small>€</small>12,999
                    </span>
                  )
                }
              ]}
              customCellClasses={[
                classes.textCenter,
                classes.padding0,
                classes.textRight,
                classes.textRight
              ]}
              customClassesForCells={[0, 1, 5, 6]}
              customHeadCellClasses={[
                classes.textCenter,
                classes.textRight,
                classes.textRight
              ]}
              customHeadClassesForCells={[0, 5, 6]}
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
