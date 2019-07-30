import React from 'react'
import Tab from './Tab'

const Tabs = ({ tabs }) => (
  <div>
    <ul>
      {
        tabs.map(tab => (
          <Tab 
            tab={tab}
          />
        ))
      }
    </ul>
    
  </div>
)

export default Tabs