import {Img, makeScene2D} from '@motion-canvas/2d';
import {beginSlide, Origin, slideTransition} from '@motion-canvas/core';

import img from "../../images/json.png"

export default makeScene2D(function* (view) {
    view.fill('#242424');

    view.add(<Img src={img} scale={2.2}/>);

    yield* slideTransition(Origin.Right, 0.2)

    yield* beginSlide("json editor")
});
