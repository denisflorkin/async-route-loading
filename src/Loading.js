import React from 'react'

const Loading = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
    }}
  >
    <div style={{ maxWidth: '160px', textAlign: 'center', fontSize: '2em', color: '#cecece' }}>
      •••
    </div>
  </div>
)

export default Loading
