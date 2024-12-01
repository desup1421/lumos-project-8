/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import CardSkeleton from '../../../src/components/CardSkeleton';

describe('CardSkeleton', () => {
  it('renders the component', () => {
    render(<CardSkeleton />);

    // Check if the component renders without errors
    const cardSkeleton = screen.getByTestId('card-skeleton');
    expect(cardSkeleton).toBeInTheDocument();
  });
});