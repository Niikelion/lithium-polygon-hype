import {makePlugin, makeProject} from '@motion-canvas/core';

import blank from "./scenes/blank?scene";
import imGui from "./scenes/imgui?scene";
import columns from "./scenes/columns?scene";
import uiToolkit from "./scenes/uitoolkit?scene";
import lithiumLogo from "./scenes/lithium_logo?scene";
import lithium from "./scenes/lithium?scene";
import json from "./scenes/json?scene";
import cheats from "./scenes/cheats?scene";
import debug from "./scenes/debugger?scene";
import qr from "./scenes/qr?scene"

const scenes = [
    blank,
    imGui,
    columns,
    uiToolkit,
    lithiumLogo,
    lithium,
    cheats,
    json,
    debug,
    qr
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
