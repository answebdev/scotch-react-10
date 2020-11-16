import React from 'react';

function StatCard({ label, icon, number }) {
  return (
    <div className='stat-card'>
      <div className='stat-line'>
        <span>{icon}</span>
        <strong>{label}</strong>
      </div>
      {/* toLocaleString() adds commas to numbers, e.g. 2,000 */}
      <p>{number.toLocaleString()}</p>
    </div>
  );
}

const Eight = () => {
  return (
    <div className='AppEight'>
      <h3 style={{ marginTop: '40px', marginBottom: '20px' }}>
        Day 8: Recreate Layout with Components
      </h3>
      <StatCard icon='👉' label='Points' number={2000} />
      <StatCard icon='⚡' label='Lightnings' number={6540} />
      <StatCard icon='🤙' label='Shakas' number={337010} />
      <StatCard icon='💎' label='Diamonds' number={98661} />
      <p>
        See the sandbox here&nbsp;
        <a
          href='https://codesandbox.io/s/x92x28yy8w'
          rel='noopener noreferrer'
          target='_blank'
        >
          here
        </a>
        .
      </p>
    </div>
  );
};

export default Eight;
