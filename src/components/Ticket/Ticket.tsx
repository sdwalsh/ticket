import React from 'react';
import RandomTicketNumber from './RandomTicketNumber';

interface ITicketProps {
    min: number;
    max: number;
}

interface ITicketState {
    currentNumber: number;
    ticketGenerator: RandomTicketNumber;
}

class Ticket extends React.Component<ITicketProps, ITicketState> {
    constructor(props: ITicketProps) {
        super(props);
    }

    numDigits(x: number) {
        return (Math.log10((x ^ (x >> 31)) - (x >> 31)) | 0) + 1;
      }

    render() {
        return (
            <div>

            </div>
        );
    }

    
}

export default Ticket;