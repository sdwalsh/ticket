import React from 'react';
import { useSpring, animated, config } from 'react-spring'

export default function TicketAnimated() {
    const props = useSpring({ number: 600, config: config.molasses, from: { number: 1.00 }, delay: 1000 })
    return <animated.span>{props.number.interpolate(n => n.toFixed(0))}</animated.span>
}