import React from ('react')
import ('./Tweet.css')

function Tweet({ name, username, message, date }) {
  return (
    <div className="Tweet">
      <span>{name}</span>
      <span className="username">{username}</span>
      <p>{message}</p>
      <span className="date">{date}</span>
    </div>
  );
}
