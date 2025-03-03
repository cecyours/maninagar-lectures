import PropTypes from 'prop-types'
import React from 'react'

function ValidatedComponent({username}) {
  return (
    <div>ValidatedComponent</div>
  )
}

ValidatedComponent.prototype = {
    username:PropTypes.string.isRequired
}

export default ValidatedComponent