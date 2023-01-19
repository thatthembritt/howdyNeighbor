import React from 'react';

export default function Team({person}) {
  return (
    <div className="container">
      <div>
        <h5>{person.name}</h5>
        <a href={person.repo} className="btn btn-primary">
          See {person.name}'s GitHub.
        </a>
      </div>
    </div>
  );
}
