/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 30/05/2025 10:45:39
*/
import React, { FC, useEffect } from "react";
import "./NotificationComponent.css";
import { useDispatch, useSelector } from "react-redux";
import { getNotification } from "../../redux/selectors/selectors";
import { NotificationItem } from "../../redux/actions/types";
import { REMOVE_NOTIFICATION_ITEM } from "../../redux/actions/actionType";

interface NotificationComponentProps {}

const NotificationComponent: FC<NotificationComponentProps> = () => {
  const notifications = useSelector(getNotification);
  const dispatch = useDispatch();

  const handleRemoveNotification = (notification: NotificationItem) => {
    dispatch({
      type: REMOVE_NOTIFICATION_ITEM,
      payload: { ...notification },
    });
  };

  useEffect(() => {
    // window.scrollTo(0, 0)
    const runLocalData = async () => {
      notifications.map((notification) => {
        setTimeout(() => {
          handleRemoveNotification(notification);
        }, notification.timeout);
      });
    };
    runLocalData();
  });

  return (
    <div className="NotificationComponent">
      {notifications?.map((notification) => {
        return (
          <div
            className={"alert alert-" + notification.status}
            role="alert"
            key={notification._id}
          >
            {notification.message}
            <span
              onClick={() => handleRemoveNotification(notification)}
              className="btn btn-close"
            ></span>
          </div>
        );
      })}
    </div>
  );
};

export default NotificationComponent;
