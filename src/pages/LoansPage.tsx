import React, { useState } from 'react';
import { Loan } from '../types';
import { LoanCard } from '../components/loans/LoanCard';

const MOCK_LOANS: Loan[] = [
  {
    id: '1',
    item: {
      id: '1',
      title: 'Power Drill',
      description: 'Professional grade power drill',
      category: 'Tools',
      imageUrl: 'https://images.unsplash.com/photo-1504148455328-c376907d081c',
      owner: {
        id: '1',
        name: 'John Doe',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
        rating: 4.8
      },
      available: false,
      location: 'Brooklyn, NY'
    },
    borrower: {
      id: '2',
      name: 'Jane Smith',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      rating: 4.9
    },
    startDate: new Date('2024-03-15'),
    endDate: new Date('2024-03-20'),
    status: 'active'
  }
];

export const LoansPage: React.FC = () => {
  const [loans, setLoans] = useState<Loan[]>(MOCK_LOANS);

  const handleLoanAction = (loan: Loan) => {
    // In a real app, this would handle returning items, canceling loans, etc.
    console.log('Loan action:', loan);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">My Loans</h1>
      
      <div className="space-y-4">
        {loans.map((loan) => (
          <LoanCard
            key={loan.id}
            loan={loan}
            onAction={handleLoanAction}
          />
        ))}
      </div>
    </div>
  );
};