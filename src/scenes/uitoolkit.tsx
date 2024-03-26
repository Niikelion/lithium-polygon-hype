import {Code, LezerHighlighter, lines, makeScene2D, withDefaults} from '@motion-canvas/2d';
import {beginSlide, createRef, Origin, slideTransition} from '@motion-canvas/core';
import {parser} from "@lezer/javascript";

const csharpConfig = parser.configure({
    dialect: `csharp`
})

const CSharpHighlighter = new LezerHighlighter(csharpConfig);

const CSCode = withDefaults(Code, {
    highlighter: CSharpHighlighter
})

const uiToolkitSource = `\
public class TickTack : EditorWindow
{
    [MenuItem("Example/Window")]
    public static void ShowWindow() => GetWindow<TickTack>();

    private void CreateGUI()
    {
        var columns = new VisualElement {
            style = { flexDirection = FlexDirection.Row }
        };
        var button1 = new Button { text = "Button 1" };
        var button2 = new Button { text = "Button 2" };
        
        columns.Add(button1);
        columns.Add(button2);
        rootVisualElement.Add(columns);
    }
}\
`

export default makeScene2D(function* (view) {
    view.fill('#242424');

    const code = createRef<Code>();

    view.add(<CSCode ref={code} code={uiToolkitSource}/>);

    yield* slideTransition(Origin.Right, 0.2)

    yield* beginSlide("UI Toolkit Example")
    yield* code().selection(lines(5, 16), 0.2)
    yield* beginSlide("gui method")
    yield* code().selection(lines(7, 9), 0.2)
    yield* beginSlide("container")
    yield* code().selection(lines(10, 11), 0.2)
    yield* beginSlide("buttons")
    yield* code().selection(lines(13, 15), 0.2)
    yield* beginSlide("stitching")
});
