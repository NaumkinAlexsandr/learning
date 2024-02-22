import React from "react";

const people = ["Jack", "Max", "Leo", "Alex", "Kira"];

export default function Key() {
  return (
    <>
      <ul>
        {people.map((person, index) => (
          <li key={index}>{person}</li>
        ))}
      </ul>
    </>
  );
}
