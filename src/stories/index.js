import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { BandwidthProvider } from '@bandwidth/shared-components';
import { Button } from '@bandwidth/shared-components';

import { Welcome } from '@storybook/react/demo';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('Button', module)
  .add('Primary', () => <BandwidthProvider>
                          <Button onClick={action('clicked')}>PRIMARY</Button>
                        </BandwidthProvider>);

storiesOf('Modal', module)
  .add('Modal', () => <BandwidthProvider>
                        
                      </BandwidthProvider>)
