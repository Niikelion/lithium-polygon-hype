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

const lithiumLayout = `\
    protected override IComponent Layout() => new Component(ctx =>
    {
        var tick = ctx.Remember(true);
        return CU.Button(
            () => tick.Value = !tick,
            tick ? "Tick" : "Tack"
        );
    });
`

const lithiumColumns = `\
        return CU.Row(CU.Seq(
            CU.Button(Noop, "Button 1"),
            CU.Button(Noop, "Button 2")
        ));
        void Noop() { }
`

export default makeScene2D(function* (view) {
    view.fill('#242424');

    const code = createRef<Code>();

    view.add(<CSCode ref={code} code={imGuiSource}/>);

    yield* beginSlide("ImGui Example")
    yield* code().code.replace(word(0, 24, 12), "ComposableWindow", 0.2)
    yield* beginSlide("composable class")
    yield* code().code.replace(lines(7, 11), lithiumLayout, 0.4)
    yield* beginSlide("layout")
    yield* code().code.replace(lines(2, 3), "", 0.2)
    yield* beginSlide("remove field")
    yield* code().code.replace(lines(7, 11), lithiumColumns, 0.4)
    yield* beginSlide("end")
});
