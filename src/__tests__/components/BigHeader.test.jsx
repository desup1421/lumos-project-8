/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import BigHeader from '../../components/BigHeader';

describe('BigHeader', () => {
  it('renders the BigHeader component with the correct text', () => {
    // Render the BigHeader component with some text
    const text = 'Hello, world!';
    render(<BigHeader>{text}</BigHeader>);
    
    // Check if the text is rendered correctly
    const header = screen.getByText(text);
    expect(header).toBeInTheDocument();
  });
});



