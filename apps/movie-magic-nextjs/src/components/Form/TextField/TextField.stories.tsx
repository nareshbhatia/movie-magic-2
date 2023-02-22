import { Story, Meta } from '@storybook/react';
import { TextField } from './TextField';

export default {
  title: 'Components/TextField',
  component: TextField,
} as Meta;

const Template: Story = (args) => {
  return <TextField id={args.id} name={args.name} label={args.label} />;
};

export const TextFieldStory = Template.bind({});
TextFieldStory.storyName = 'TextField';
TextFieldStory.args = {
  id: 'pickup-location',
  name: 'pickup-location',
  label: 'Pickup Spot',
};
