import MouseOffsetObserver from './observers/MouseOffsetObserver';
import ManipulatorCamera from './camera/ManipulatorCamera';
import MouseObserver from './observers/MouseObserver';
import KeyboardObserver from './observers/KeyboardObserver';
import ManipulatorCanvas from './camera/ManipulatorCanvas';
import CursorView from './cursor/CursorView';
import ScrollObserver from './observers/ScrollObserver';

class Manipulator {
	private readonly containerElement: HTMLElement;
	private readonly mouseOffsetObserver: MouseOffsetObserver;
	private readonly mouseObserver: MouseObserver;
	private readonly keyboardObserver: KeyboardObserver;
	private readonly scrollObserver: ScrollObserver;
	private readonly camera: ManipulatorCamera;
	private readonly canvas: ManipulatorCanvas;
	private readonly cursor: CursorView;

	constructor(container: HTMLElement) {
		this.containerElement = container;

		this.canvas = new ManipulatorCanvas();
		const canvasElement = this.canvas.getElement();

		this.cursor = new CursorView(canvasElement);
		this.mouseObserver = new MouseObserver();
		this.scrollObserver = new ScrollObserver();
		this.keyboardObserver = new KeyboardObserver();
		this.mouseOffsetObserver = new MouseOffsetObserver();

		this.camera = new ManipulatorCamera({
			mouseObserver: this.mouseObserver,
			mouseOffsetObserver: this.mouseOffsetObserver,
			keyboardObserver: this.keyboardObserver,
			scrollObserver: this.scrollObserver,
			canvas: this.canvas,
			cursor: this.cursor,
		});

		this.containerElement.append(canvasElement);
	}

	public destruct = () => {
		this.canvas.destructor();
		this.mouseObserver.destructor();
		this.keyboardObserver.destructor();
	};
}

export default Manipulator;
