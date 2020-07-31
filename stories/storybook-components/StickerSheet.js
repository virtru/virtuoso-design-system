import React from 'react';

function StickerSheet({ children, title }) {
  return (
    <div
      style={{
        marginBottom: 18,
      }}
    >
      <div
        style={{
          backgroundColor: '#F3F5F7',
          color: '#777E8C',
          width: '100%',
          height: 40,
          boxShadow: '#C6CBD4 0 -1px 0 0 inset',
          borderRadius: '5px 5px 0 0',
        }}
      >
        <div
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            padding: '8px 15px',
            fontSize: 13,
            color: 'rgb(0,30,74)',
            fontWeight: 700,
            fontFamily: [
              '"Nunito Sans"',
              '-apple-system',
              '".SFNSText-Regular"',
              '"San Francisco"',
              'BlinkMacSystemFont',
              '"Segoe UI"',
              '"Helvetica Neue"',
              'Helvetica',
              'Arial',
              'sans-serifbody',
            ].join(','),
          }}
        >
          {title}
        </div>
      </div>
      <div style={{ backgroundColor: '#deeeff', padding: 15, borderRadius: '0 0 5px 5px' }}>
        <div style={{ backgroundColor: 'white', padding: 10 }}>{children}</div>
      </div>
    </div>
  );
}

export default StickerSheet;
