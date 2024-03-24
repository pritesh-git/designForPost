import React, { useState } from 'react'
import Post from './components/PostArray'
import CardArray from './components/CardArray'

const App = () => {
  const [tabId, setTabId] = useState(1)

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" onClick={() => setTabId(1)}>
          Blog Design
        </a>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" onClick={() => setTabId(1)}>
                Posts
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => setTabId(2)}>
                Cards
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link disabled"
                tabindex="-1"
                aria-disabled="true">
                Users
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {tabId === 1 ? <Post /> : tabId === 2 ? <CardArray /> : 'kkkkkkkkkk'}
    </div>
  )
}

export default App
