import React, { Component } from 'react'


const Footer = props => {

return (
<div>
    <nav className="navbar navbar-dark bg-dark">
  <a className="navbar-brand" href="/">&copy;{props.copy}</a>
</nav>
</div>
)

}

export default Footer