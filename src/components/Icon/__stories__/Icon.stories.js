import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import { Icon } from '../Icon';

storiesOf('Icon', module).add('Icon', () => {
  return (
    <>
    <Icon title="rasdasdse" of="return" size="small"/>
    <Icon title="rasdasdse" of="valid" size="small"/>
    </>
  );
});
