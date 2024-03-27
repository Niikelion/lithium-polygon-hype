import {Img, Layout, Txt, makeScene2D} from '@motion-canvas/2d';
import {beginSlide, Direction, Origin, slideTransition} from '@motion-canvas/core';

import img from "../../images/lithium-qr.png"

export default makeScene2D(function* (view) {
    view.fill('#242424');

    view.add(<Layout layout direction={"column"} alignItems={"center"} gap={60}>
        <Img scale={1.2} src={img}/>
        <Txt fill={"white"} fontSize={80}>https://github.com/Niikelion/lithium-ui</Txt>
    </Layout>);

    yield* slideTransition(Origin.Right, 0.2)

    yield* beginSlide("qr")
});
