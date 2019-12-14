import React from 'react'
import ReactDOM from 'react-dom'

const MainSection = () => {
  return (
    <div className="container">
      <div className="text-center">
          <ul className="list-group mb-3">
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <h6 className="my-0">First item</h6>
              <small class="text-muted">Some description</small>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <h6 className="my-0">Second item</h6>
              <small class="text-muted">Some description</small>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <h6 className="my-0">Third item</h6>
              <small class="text-muted">Some description</small>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <h6 className="my-0">Fourth item</h6>
              <small class="text-muted">Some description</small>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <h6 className="my-0">Fifth item</h6>
              <small class="text-muted">Some description</small>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <h6 className="my-0">Sixth item</h6>
              <small class="text-muted">Some description</small>
            </li>
          </ul>
      </div>
    </div>
  )
}

ReactDOM.render(
  <MainSection />,
  document.getElementById('main')
);
