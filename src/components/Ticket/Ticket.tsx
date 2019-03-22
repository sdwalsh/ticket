import React from 'react';
import RandomTicketNumber from './RandomTicketNumber';
import { useSpring, useTransition, animated, config } from 'react-spring';

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

    // items = [{key: 1,}]

    // transition = useTransition(this.items, item => item.key, {
    //     from: { transform: 'translate3d(0,-40px,0)' },
    //     enter: { transform: 'translate3d(0,0px,0)' },
    // })

    springNumber = useSpring({ number: 1, from: { number: 0 } })

    numDigits(x: number) {
        return (Math.log10((x ^ (x >> 31)) - (x >> 31)) | 0) + 1;
      }

    render() {
        return (
            <animated.span>{this.springNumber}</animated.span>
        );
    }

    
}

export default Ticket;