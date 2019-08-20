import React from 'react'
import { LandingPageTemplate } from '../../templates/landing-page'

const LandingPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()
  if (data) {
    return (
      <LandingPageTemplate
        title={data.title}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

export default LandingPagePreview
