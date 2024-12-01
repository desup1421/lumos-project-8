/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import BigHeader from '../../components/BigHeader';

describe('BigHeader', () => {
  it('renders the BigHeader component with the correct text', () => {
    const text = 'Hello, world!';
    render(<BigHeader>{text}</BigHeader>);
    const header = screen.getByText(text);
    expect(header).toBeInTheDocument();
  });
});



