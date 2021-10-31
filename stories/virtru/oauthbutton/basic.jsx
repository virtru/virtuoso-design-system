import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { OauthButton } from '@';

storiesOf('virtru/oauthbutton', module).add(
  'basic',
  () => (
    <>
      <div style={{ marginBottom: '20px', width: '270px' }}>
        <OauthButton variant={OauthButton.VARIANT.OUTLOOK} fullWidth onClick={() => {}}>
          Sign in with Outlook
        </OauthButton>
      </div>
      <div style={{ marginBottom: '20px', width: '270px' }}>
        <OauthButton variant={OauthButton.VARIANT.OFFICE365} fullWidth onClick={() => {}}>
          Sign in with Office365
        </OauthButton>
      </div>
      <div style={{ marginBottom: '20px', width: '270px' }}>
        <OauthButton variant={OauthButton.VARIANT.GOOGLE} fullWidth onClick={() => {}}>
          Sign in with Google
        </OauthButton>
      </div>
      <div style={{ marginBottom: '20px', width: '270px' }}>
        <OauthButton variant={OauthButton.VARIANT.OTHER} onClick={() => {}} fullWidth>
          Sign in with SSO
        </OauthButton>
      </div>
      <div style={{ marginBottom: '20px', width: '270px' }}>
        <OauthButton variant={OauthButton.VARIANT.OTHER} onClick={() => {}} fullWidth>
          Sign in by email
        </OauthButton>
      </div>
    </>
  ),
  {
    docs: {
      page: () => (
        <>
          <h1 id="enus">en-US</h1>
          <p>OauthButton component examples.</p>
        </>
      ),
    },
  },
);
