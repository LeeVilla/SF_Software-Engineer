import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

/**
 * DrinkItem component displays the detail of a selected drink.
 * @param {Array} items - an array of drink objects
 * @param {string} cantFind - the path to redirect to if the selected drink is not found
 */

function DrinkItem({ items, cantFind }) {
  // useParams hook retrieves the `id` value from the URL
  const { id } = useParams();

  // find the selected drink in the items array
  let drink = items.find((drink) => drink.id === id);
  // if the drink is not found, redirect to the `cantFind` path
  if (!drink) return <Redirect to={cantFind} />;

  // display the drink details
  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {drink.name}
          </CardTitle>
          <CardText className="font-italic">{drink.description}</CardText>
          <p>
            <b>Recipe:</b> {drink.recipe}
          </p>
          <p>
            <b>Serve:</b> {drink.serve}
          </p>
        </CardBody>
      </Card>
    </section>
  );
}

export default DrinkItem;
