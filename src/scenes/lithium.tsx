import {makeScene2D, Code, lines, word} from '@motion-canvas/2d';
import {all, beginSlide, createRef, Origin, slideTransition} from '@motion-canvas/core';
import {CSCode} from "../components/Code";

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

const lithiumOnlyLayout = `\
private Component Hello() => new (ctx =>
{
    return CU.Text("Hello world!");
});
`

const enemyState = `\
    var visible = ctx.Remember(false);
    
    var infoToggle =>
        CU.Button(() => visible.Value = !visible, (visible ? "Hide" : "Show") + " info");
    
`

const enemyLayout = `\
CU.Row(CU.Seq(
        DefaultInspector(),
        infoToggle,
        CU.Switch(visible, Info, () => CU.Box())
    ));\
`

export default makeScene2D(function* (view) {
    view.fill('#242424');

    const code = createRef<Code>();

    view.add(<CSCode ref={code} code={imGuiSource}/>);

    yield* slideTransition(Origin.Right, 0.2)

    yield* beginSlide("ImGui Example")
    yield* code().code.replace(word(0, 24, 12), "ComposableWindow", 0.2)
    yield* beginSlide("composable class")
    yield* code().code.replace(lines(7, 11), lithiumLayout, 0.4)
    yield* beginSlide("layout")
    yield* code().code.replace(lines(2, 3), "", 0.2)
    yield* beginSlide("remove field")
    yield* code().code.replace(lines(7, 11), lithiumColumns, 0.4)
    yield* beginSlide("columns")
    yield* all(
        code().code.remove(lines(0, 4), 0.4),
        code().code.remove(lines(13), 0.4),
        code().code.replace(lines(5, 12), lithiumOnlyLayout, 0.4)
    )
    yield* beginSlide("pure component")
    yield* all(
        code().code.replace(word(0, 18, "Hello".length), "Enemy", 0.4),
        code().code.insert([2, 0], enemyState, 0.4),
        code().code.replace(word(2, 11, 24), enemyLayout, 0.4)
    )
    yield* beginSlide("toggle enemy info")
});
