// NotificationComponent.js
import React, { useState } from 'react';
import './NotificationComponent.css'; // Import your CSS file

const NotificationComponent = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      avatar: 'logoc.png',
      user: 'Admin ',
      activity: 'reviewed your report',
      post: 'Hope Seeker Scam!',
      time: '1m ago',
      unread: true,
    },
    {
      id: 2,
      avatar: 'logoc.png',
      user: 'Care Quest',
      activity: 'added you as a Trust Endorser',
      time: '5m ago',
      unread: true,
    },{id: 3,
    avatar: 'avatar-jacob-thompson.webp',
    user: 'Ali Ahmed',
    activity: 'got 5 stars',
    time: '1 day ago',
    unread: true,
  },
  {
    id: 4,
    avatar: 'avatar-rizky-hasanuddin.webp',
    user: 'Shahid Afridi',
    activity: 'approved you request for Food drive',
    time: '5 days ago',
    unread: true,
  }, {
    id: 5,
    avatar: 'logoc.png',
    user: 'Care Quest',
    activity: 'has new update',
    time: '1 week ago',
  },
  {
    id: 6,
    avatar: 'avatar-anna-kim.webp',
    user: 'ETO Foundation',
    activity: 'accepted request ',
    post: 'Applying on behalf of Ali Ahmed',
    time: '2 weeks ago',
  },
 
    // Add more notifications as needed
  ]);

  const markAsRead = () => {
    const updatedNotifications = notifications.map((notification) => ({
      ...notification,
      unread: false,
    }));
    setNotifications(updatedNotifications);
  };

  const markSingleAsRead = (id) => {
    const updatedNotifications = notifications.map((notification) => {
      if (notification.id === id) {
        return {
          ...notification,
          unread: false,
        };
      }
      return notification;
    });
    setNotifications(updatedNotifications);
  };

  return (
    
    <div className="container">
      <header>
        <div className="notif_box">
          <h2 className="title">Notifications</h2>
          <span id="notifes">{notifications.filter((n) => n.unread).length}</span>
        </div>
        <p id="mark_all" onClick={markAsRead}>
          Mark all as read
        </p>
      </header>
      <main>
        {/* Map through notifications */}
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`notif_card ${notification.unread ? 'unread' : ''}`}
            onClick={() => markSingleAsRead(notification.id)}
          >
            <img src={notification.avatar} alt="avatar" />
            <div className="description">
              <p className="user_activity">
                <strong>{notification.user}</strong> {notification.activity}{' '}
                <b>{notification.post}</b>
              </p>
              <p className="time">{notification.time}</p>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default NotificationComponent;
