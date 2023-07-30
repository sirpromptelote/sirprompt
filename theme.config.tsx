import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Tech Quests and Heartfelt Bonds - Technical Documentation  </span>,
  footer: {
    text: (
      <span>
     Tech Quests and Heartfelt Bonds  - A Graphic Novel by Sir Prompt {new Date().getFullYear()} ©{' '}
      </span>
    )
  }
}

export default config
