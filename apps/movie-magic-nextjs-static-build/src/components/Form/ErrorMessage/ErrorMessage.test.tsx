import { render, screen } from '../../test/test-utils';
import { ErrorMessage } from './ErrorMessage';

describe('<ErrorMessage />', () => {
  test('renders correctly', () => {
    render(<ErrorMessage>ErrorMessage</ErrorMessage>);
    expect(screen.getByText('ErrorMessage')).toBeInTheDocument();
  });
});
