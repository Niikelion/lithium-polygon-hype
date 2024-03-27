import {makePlugin, makeProject} from '@motion-canvas/core';

import imGui from "./scenes/imgui?scene";
import columns from "./scenes/columns?scene";
import uiToolkit from "./scenes/uitoolkit?scene";
import lithiumLogo from "./scenes/lithium_logo?scene";
import lithium from "./scenes/lithium?scene";
import json from "./scenes/json?scene";
import cheats from "./scenes/cheats?scene";
import debug from "./scenes/debugger?scene";

const scenes = [
    imGui,
    columns,
    uiToolkit,
    lithiumLogo,
    lithium,
    cheats,
    json,
    debug
]

export default makeProject({
    scenes,
    experimentalFeatures: true,
    plugins: [
        makePlugin({
            name: 'shortcuts',
            presenter(presenter) {
                document.addEventListener('keydown', event => {
                    switch (event.key) {
                        case '.':
                            presenter.resume()
                            break;
                    }
                });
            },
        })(),
    ],
});
