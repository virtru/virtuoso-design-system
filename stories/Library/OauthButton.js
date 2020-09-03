/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text, boolean } from '@storybook/addon-knobs';

import { OauthButton } from '@';

const variants = Object.values(OauthButton.VARIANT);
const [defaultVariant] = variants;

storiesOf('OauthButton', module)
  .lokiSkip('default', () => (
    <OauthButton
      variant={select('Variant', variants, defaultVariant)}
      disabled={boolean('Is disabled', false)}
      fullWidth={boolean('Use full width', false)}
    >
      {text('Inner text', 'Sign in with Google')}
    </OauthButton>
  ))
  .add('google', () => (
    <OauthButton variant={OauthButton.VARIANT.GOOGLE}>
      {text('Inner text', 'Sign in with Google')}
    </OauthButton>
  ))
  .add('outlook', () => (
    <OauthButton variant={OauthButton.VARIANT.OUTLOOK}>
      {text('Inner text', 'Sign in with Outlook')}
    </OauthButton>
  ))
  .add('office 365', () => (
    <OauthButton variant={OauthButton.VARIANT.OFFICE365}>
      {text('Inner text', 'Sign in with Office365')}
    </OauthButton>
  ))
  .add('other', () => (
    <OauthButton variant={OauthButton.VARIANT.OTHER}>
      {text('Inner text', 'Use Single Sign-On (SSO)')}
    </OauthButton>
  ));
