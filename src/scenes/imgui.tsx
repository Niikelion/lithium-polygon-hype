import {makeScene2D, Code, lines, LezerHighlighter, withDefaults, word} from '@motion-canvas/2d';
import {all, beginSlide, createRef} from '@motion-canvas/core';
import {parser} from "@lezer/javascript";

const csharpConfig = parser.configure({
    dialect: `csharp`
})

const CSharpHighlighter = new LezerHighlighter(csharpConfig);

const CSCode = withDefaults(Code, {
    highlighter: CSharpHighlighter
})

const imGuiSource = `\
public class TickTack : EditorWindow
{
    private bool tick = true;

    [MenuItem("Example/Window")]
    public static void ShowWindow() => GetWindow<TickTack>();

    private void OnGUI()
    {
        if (GUILayout.Button(tick ? "Tick" : "Tack"))
            tick = !tick;
    }
}\
`

const imGuiSource2 = `\
    private void OnGUI()
    {
        var width = GUILayout.Width(Screen.width/2 - 5);
        var height = GUILayout.Height(EditorGUIUtility.singleLineHeight);
        
        GUILayout.BeginHorizontal();
        GUILayout.Button("Button 1", width, height);
        GUILayout.Button("Button 2", width, height);
        GUILayout.EndHorizontal();
    }
`

export default makeScene2D(function* (view) {
    view.fill('#242424');

    const code = createRef<Code>();

    view.add(<CSCode ref={code} code={imGuiSource}/>);

    yield* beginSlide("ImGui Example")
    yield* code().selection(lines(4, 5), 0.2)
    yield* beginSlide("show window")
    yield* code().selection(lines(7, 11), 0.2)
    yield* beginSlide("draw ui")
    yield* code().selection(lines(2), 0.2)
    yield* beginSlide("state")
    yield* code().selection(lines(0, 100), 0.2)
    yield* beginSlide("before columns")
    yield* all(
        code().code.replace(lines(2, 3), "", 0.4),
        code().code.replace(lines(7,11), imGuiSource2, 0.4)
    )
    yield* beginSlide("columns")
    yield* code().selection(word(7, 36, 18), 0.2)
    yield* beginSlide("magic!")
});
