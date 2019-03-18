import React from 'react';

interface IRandomTicketNumber {
    min: number;
    max: number;
    noSelect: number[];
}

class RandomTicketNumber {
    min: number;
    max: number;
    noSelect: Set<number>;
    constructor(props: IRandomTicketNumber) {
        this.min = props.min;
        this.max = props.max;
        this.noSelect = new Set(props.noSelect);
    }

    randomWithRange(min: number = this.min, max: number = this.max) {
        return Math.random() * (max - min) + min;
    }

    roll() {
        let rand: number;

        do {
            rand = this.randomWithRange()
        } while (this.noSelect.has(rand));

        this.noSelect.add(rand);
        return rand;
    }
}

export default RandomTicketNumber;