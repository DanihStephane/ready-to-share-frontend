import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';
import { Loan } from '../../types';
import { Button } from '../ui/Button';

interface LoanCardProps {
  loan: Loan;
  onAction: (loan: Loan) => void;
}

export const LoanCard: React.FC<LoanCardProps> = ({ loan, onAction }) => {
  const getStatusColor = (status: Loan['status']) => {
    switch (status) {
      case 'active': return 'text-green-600 bg-green-100';
      case 'pending': return 'text-yellow-600 bg-yellow-100';
      case 'completed': return 'text-gray-600 bg-gray-100';
      case 'cancelled': return 'text-red-600 bg-red-100';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-start gap-4">
        <img
          src={loan.item.imageUrl}
          alt={loan.item.title}
          className="w-24 h-24 rounded-lg object-cover"
        />
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-semibold">{loan.item.title}</h3>
            <span className={`px-2 py-1 rounded-full text-sm ${getStatusColor(loan.status)}`}>
              {loan.status}
            </span>
          </div>
          
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{format(loan.startDate, 'MMM d')}</span>
              <ArrowRight className="w-4 h-4" />
              <span>{format(loan.endDate, 'MMM d')}</span>
            </div>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-2">
              <img
                src={loan.borrower.avatar}
                alt={loan.borrower.name}
                className="w-6 h-6 rounded-full"
              />
              <span className="text-sm text-gray-700">{loan.borrower.name}</span>
            </div>
            {loan.status === 'active' && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => onAction(loan)}
              >
                Return Item
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};