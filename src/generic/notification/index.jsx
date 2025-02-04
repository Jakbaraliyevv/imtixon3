import { notification } from "antd";
const notificationApi = () => {
  const notify = ({ type }) => {
    switch (type) {
      case "add":
        return notification.success({
          message: "Add card",
          className: "custom-notification",
          duration: 1,
        });
      case "addToLike":
        return notification.success({
          message: "Add Liked",
          className: "custom-notification",
          duration: 1,
        });
      case "deletCard":
        return notification.success({
          message: "Delete Card",
          className: "custom-notification",
          duration: 1,
        });
      case "cardAdd":
        return notification.success({
          message: "Bu tovar korzinada bor",
          className: "custom-notification",
          duration: 1,
        });
      default:
        return;
    }
  };
  return notify;
};

export default notificationApi;
