import { Story, Meta } from '@storybook/react';
import { ErrorMessage } from './ErrorMessage';

export default {
  title: 'Components/ErrorMessage',
  component: ErrorMessage,
} as Meta;

const Template: Story = (args) => {
  return <ErrorMessage error={args.error} />;
};

export const ErrorMessageStory = Template.bind({});
ErrorMessageStory.storyName = 'ErrorMessage';
ErrorMessageStory.args = {
  error: 'Network error',
};
