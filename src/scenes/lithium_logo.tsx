import {Img, makeScene2D} from '@motion-canvas/2d';
import {beginSlide, Origin, slideTransition} from '@motion-canvas/core';

import logo from "../../images/logo.png"

export default makeScene2D(function* (view) {
    view.fill('#242424');

    view.add(<Img src={logo}/>);

    yield* slideTransition(Origin.Right, 0.2)

    yield* beginSlide("lithium logo")
});
