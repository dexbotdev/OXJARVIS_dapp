// ** MUI Imports
import Grid from '@mui/material/Grid'
import React, { Component } from 'react'

import { ArkenWidget } from 'arken-widget'
 
const SwapScreen = () => {
  return ( 
        <Grid container  margin={'auto'}> 
              {/* openocean widget */} 
              <ArkenWidget
        chain='arbitrum'
        mode="dark"
        themeColor=''
        themeTextColor=''
        baseTokenAddress='0xd4d42f0b6def4ce0383636770ef773390d85c61a'
        quoteTokenAddress='0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9'
        externalTopTokenAddress={[]}
        customImageToken={{}}
        graphRange={1}
        widgetType="swap"
        containerStyle={{
          width: '100%',
          minHeight: 700
          // put container style here
        }}
      />
          </Grid> 
  )
}

export default SwapScreen
