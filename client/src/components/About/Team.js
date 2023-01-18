import React from 'react';

export default function Team({person}) {
  return (
    <div className="container">
      <div>
        <img src={require(`../../Assets/${person.img}`)} alt="Card cap"/>
        <div>
          <h5>Name: {person.name}</h5>
          <a href={person.repo} className="btn btn-primary">
            See {person.name}'s GitHub.
          </a>
        </div>
      </div>
    </div>
  );
}
