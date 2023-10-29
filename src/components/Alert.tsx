import React from 'react'
import {BorderBottomOutlined,} from '@ant-design/icons';
import { Button, notification } from 'antd';
import type { NotificationPlacement } from 'antd/es/notification/interface';


const Alert: React.FC = () => {
    const [api, contextHolder ] = notification.useNotification();
  
    const openNotification = (placement: NotificationPlacement) => {
      api.info({
        message: `You have entered this letter`,
        description:
          'Please enter another letter',
        placement,
      });
    };

  return (
    <>
    {contextHolder}
    <Button
    type="primary"
    onClick={() => openNotification('bottom')}
    icon={<BorderBottomOutlined />}
  ></Button>
  </>
  )
}

export default Alert;