import React from 'react'
import ReactDOM from 'react-dom'

const MainSection = () => {
  return (
    <div className="container">
      <div className="text-center">
        Our first example with React. Really!
      </div>
    </div>
  )
}

ReactDOM.render(
  <MainSection />,
  document.getElementById('main')
);
