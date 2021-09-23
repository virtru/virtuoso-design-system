import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Button } from '@';

storiesOf('Components/Button', module).add('disabled', () => 
  <>
    <Button type="primary">Primary</Button>
    <Button type="primary" disabled>
      Primary(disabled)
    </Button>
    <br />
    <Button>Default</Button>
    <Button disabled>Default(disabled)</Button>
    <br />
    <Button type="dashed">Dashed</Button>
    <Button type="dashed" disabled>
      Dashed(disabled)
    </Button>
    <br />
    <Button type="text">Text</Button>
    <Button type="text" disabled>
      Text(disabled)
    </Button>
    <br />
    <Button type="link">Link</Button>
    <Button type="link" disabled>
      Link(disabled)
    </Button>
    <br />
    <Button danger>Danger Default</Button>
    <Button danger disabled>
      Danger Default(disabled)
    </Button>
    <br />
    <Button danger type="text">
      Danger Text
    </Button>
    <Button danger type="text" disabled>
      Danger Text(disabled)
    </Button>
    <br />
    <Button type="link" danger>
      Danger Link
    </Button>
    <Button type="link" danger disabled>
      Danger Link(disabled)
    </Button>
    <div className="site-button-ghost-wrapper">
      <Button ghost>Ghost</Button>
      <Button ghost disabled>
        Ghost(disabled)
      </Button>
    </div>
  </>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>To mark a button as disabled, add the <code>disabled</code> property to the <code>Button</code>.</p></>) } });