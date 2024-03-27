import {makeScene2D} from '@motion-canvas/2d';
import {beginSlide} from '@motion-canvas/core';

export default makeScene2D(function* (view) {
    view.fill('#242424');

    yield* beginSlide("blank")
});
