import React from 'react'

const Tab = ({ tab, index, activeTab, clickOnTab }) => {
  const CSSActiveTab = 
    `tab__title ${activeTab === index ? 'tab__title-active' : ''}`

  return (
    <li 
      className={CSSActiveTab}
      key={index}
      value={index}
      onClick={() => clickOnTab(index)}
      >
      {tab.title}
    </li>
  )
}

export default Tab
