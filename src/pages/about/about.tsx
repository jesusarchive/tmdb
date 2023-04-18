import React from 'react';
import { useLoaderData } from 'react-router-dom';

export async function loader() {
  await new Promise((r) => setTimeout(r, 500));

  return 'I came from the about.tsx loader function!';
}

function About() {
  const data = useLoaderData() as string;

  return (
    <div>
      <h2>About</h2>
      <p>{data}</p>
    </div>
  );
}

export default About;
