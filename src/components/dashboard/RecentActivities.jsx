import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addActivity } from "../../redux/slices/activityslice";
import "./head-sidebar.css";

const RecentActivities = () => {
  const activities = useSelector((state) => state.activity.activities);
  const dispatch = useDispatch();

  return (
    <div className="todo-widget">
      <h3>Recent Activities</h3>
      <div className="todo-list">
        <ul>
          {activities.map((activity) => (
            <li key={activity.id}>
              {activity.action} - <small>{activity.timestamp}</small>
            </li>
          ))}
        </ul>
      </div>
      <button
        className="todoaddbutton"
        onClick={() => dispatch(addActivity("Performed a new action"))}
      >
        Add Activity
      </button>
    </div>
  );
};

export default RecentActivities;
