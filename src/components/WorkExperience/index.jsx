import React from 'react';
import { EXPERIENCE } from './content';

const Positions = ({ list }) => {
  return (
    <ul>
      {list.map((x) => (
        <li className="italic" key={x}>
          {x}
        </li>
      ))}
    </ul>
  );
};

const Responsibilities = ({ list }) => {
  return (
    <ul className="pl-5 list-disc">
      {list.map((x) => (
        <li key={x}>{x}</li>
      ))}
    </ul>
  );
};

const WorkExperience = () => {
  return (
    <section className="mb-8">
      <h3 className="mb-2">Work Experience</h3>
      {EXPERIENCE.map((x) => (
        <div className="mb-4 text-lg" key={x.company}>
          <h4>
            {x.company} | {x.location} | {x.dates}
          </h4>
          <Positions list={x.positions} />
          <Responsibilities list={x.responsibilities} />
        </div>
      ))}
    </section>
  );
};

export default WorkExperience;
