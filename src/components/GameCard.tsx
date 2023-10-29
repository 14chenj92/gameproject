import React from "react";
import { Avatar, Card, Button } from "antd";
import { Link } from "react-router-dom";
import Hangman from "../images/hangman.jpg";

const { Meta } = Card;

const GameCard: React.FC = (props) => (
  <Card
    style={{ width: 300 }}
    cover={<img alt="example" src={Hangman} />}
    actions={[
      <Link to="/hangman">
        <Button type="primary">Play</Button>
      </Link>,
    ]}
  >
    <Meta title="Hangman" description="This is the description" />
  </Card>
);

export default GameCard;
