import React from "react";
import clsx from "clsx";

import styles from "./Notification.styles.scss";

const Notification = (props) => {
  const { show, children, warning, success, failure } = props;
  return (
    <div
      className={clsx({
        [styles.notification]: true,
        [styles.showNotification]: show,
        [styles.warning]: warning,
        [styles.success]: success,
        [styles.failure]: failure,
      })}
    >
      {children}
    </div>
  );
};

export default Notification;
