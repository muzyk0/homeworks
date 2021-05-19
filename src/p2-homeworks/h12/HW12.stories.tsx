import React from 'react';
import {Story, Meta} from '@storybook/react';
import HW12 from './HW12';
import {ReduxStoreProviderDecorator} from './ReduxStoreProviderDecorator';

export default {
    title: 'HW/HW12',
    component: HW12,
    argTypes: {},
    decorators: [ReduxStoreProviderDecorator]
} as Meta;

const Template: Story = () => <HW12/>;

export const HW12Story = Template.bind({});