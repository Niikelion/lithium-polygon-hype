import {Img, makeScene2D} from '@motion-canvas/2d';
import {beginSlide, Origin, slideTransition} from '@motion-canvas/core';

import exhibitA from "../../images/exhibit_a.png"

export default makeScene2D(function* (view) {
    view.fill('#242424');

    view.add(<Img src={exhibitA} scale={5}/>);

    yield* slideTransition(Origin.Right, 0.2)

    yield* beginSlide("exhibit a")
});
