import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import  Hangman from "../images/hangman.jpg"

const { Meta } = Card;

const GameCard: React.FC = (props) => (
  <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src= { Hangman }
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
      title="Hangman"
      description="This is the description"
    />
  </Card>
);

export default GameCard;