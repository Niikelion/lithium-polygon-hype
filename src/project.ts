import {makePlugin, makeProject} from '@motion-canvas/core';

import {Code, LezerHighlighter} from '@motion-canvas/2d';
import {parser} from '@lezer/javascript';

const config = parser.configure({
  dialect: `csharp`
})

Code.defaultHighlighter = new LezerHighlighter(config);

import imGui from "./scenes/imgui?scene";
import columns from "./scenes/columns?scene";
import uiToolkit from "./scenes/uitoolkit?scene";
import lithiumLogo from "./scenes/lithium_logo?scene";
import lithium from "./scenes/lithium?scene";

const scenes = [
    imGui,
    columns,
    uiToolkit,
    lithiumLogo,
    lithium
]

export default makeProject({
  scenes,
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
