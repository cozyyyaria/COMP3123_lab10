import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders the form and shows submitted data', () => {
  render(<App />);
  expect(screen.getByText('Data Entry Form')).toBeInTheDocument();

  fireEvent.change(screen.getByPlaceholderText('Enter email'), {
    target: { value: 'Pritesh.patel2@georgebrown.ca' },
  });
  fireEvent.change(screen.getByPlaceholderText('Full Name'), {
    target: { value: 'Pritesh Patel' },
  });
  fireEvent.change(screen.getByLabelText('Province'), {
    target: { value: 'Ontario' },
  });
  fireEvent.click(screen.getByText('Submit'));

  expect(screen.getByText('Pritesh.patel2@georgebrown.ca')).toBeInTheDocument();
  expect(screen.getByText('Pritesh Patel')).toBeInTheDocument();
  expect(screen.getAllByText('Ontario').length).toBeGreaterThan(1);
});
