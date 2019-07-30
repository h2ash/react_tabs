import React from 'react'
import Tab from './Tab'

const Tabs = ({ tabs, activeTab, clickOnTab }) => (
  <ul className='tabs'>
    {
      tabs.map((tab, index) => (
        <Tab 
          tab={tab}
          index={index}
          activeTab={activeTab}
          clickOnTab={clickOnTab}
        />
      ))
    }
  </ul>
)

export default Tabs
