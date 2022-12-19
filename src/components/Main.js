import React from 'react';

const Main = ({ user, age }) => {
  return (
    <div class="main">
      <div class="frame">
        <img
          class="photo"
          src="https://media.licdn.com/dms/image/C4E03AQHLItiYZ21DbQ/profile-displayphoto-shrink_400_400/0/1651244841075?e=1677110400&v=beta&t=fWZW9kx1BdxeXHeyUdBhg8aCSLirjzWXqG19FZjvckk"
        />
      </div>

      <div class="name">
        <p id="full_name">{user}</p>
        <p id="age">{age}</p>
      </div>

      <p id="location">Montreal</p>
    </div>
  );
};

export default Main;