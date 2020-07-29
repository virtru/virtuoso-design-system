import React from 'react'
import ReactDOM from 'react-dom'
import { Heading, Layout } from 'virtuoso-design-system'
import 'virtuoso-design-system/dist/styles.css'

function SimpleApp() {
  return (
    <Layout>
      <Layout.Header title="My App"></Layout.Header>
      Content goes here
    </Layout>
  )
}

ReactDOM.render(<SimpleApp/>, document.getElementById('mount'));