import ManipulatorCanvas from './ManipulatorCanvas';
import MouseOffsetObserver from '../observers/MouseOffsetObserver';
import MouseObserver from '../observers/MouseObserver';
import KeyboardObserver from '../observers/KeyboardObserver';
import CursorView from '../cursor/CursorView';
import ScrollObserver from '../observers/ScrollObserver';

interface ConstructorCameraProps {
	mouseObserver: MouseObserver,
	mouseOffsetObserver: MouseOffsetObserver,
	keyboardObserver: KeyboardObserver,
	scrollObserver: ScrollObserver,
	canvas: ManipulatorCanvas,
	cursor: CursorView,
}

class ManipulatorCamera {
	private readonly keyboardObserver: KeyboardObserver;
	private readonly canvas: ManipulatorCanvas;
	private readonly cursor: CursorView;

	private isMove: boolean;
	private isSpacePress: boolean;

	constructor(props: ConstructorCameraProps) {
		this.isMove = false;
		this.isSpacePress = false;
		this.cursor = props.cursor;
		this.canvas = props.canvas;
		this.keyboardObserver = props.keyboardObserver;

		const canvasElement = props.canvas.getElement();

		props.mouseOffsetObserver.subscribe(this.onMouseMove);
		canvasElement.addEventListener('mouseup', this.onMouseUp);
		canvasElement.addEventListener('mousedown', this.onMouseDown);
		props.keyboardObserver.subscribeKeyUp(this.onKeyUp);
		props.keyboardObserver.subscribeKeyDown(this.onKeyDown);
		props.scrollObserver.subscribe(this.onScroll);
	}

	public enableMove = () => {
		this.isMove = true;
	};

	public disableMove = () => {
		this.isMove = false;
	};

	public isMoving = (): boolean => this.isMove;

	private onMouseMove = (offsetX: number, offsetY: number) => {
		if (!this.isMove) {
			return;
		}

		this.canvas.setConfiguration(prev => ({
			...prev,
			x: prev.x - offsetX,
			y: prev.y - offsetY,
		}));
	};

	private onMouseDown = () => {
		if (this.isMove) {
			return;
		}

		this.enableMove();
		this.cursor.enableGrabbing();
	};

	private onMouseUp = () => {
		this.disableMove();
		if (this.isSpacePress) {
			this.cursor.enableGrab();
			return;
		}
		this.cursor.reset();
	};

	private onKeyDown = (ev: KeyboardEvent) => {
		if (ev.code === 'Space') {
			if (!this.isSpacePress) {
				this.isSpacePress = true;
				this.cursor.enableGrab();
			}
			ev.preventDefault();
		}
	};

	private onKeyUp = (ev: KeyboardEvent) => {
		if (ev.code === 'Space') {
			this.isSpacePress = false;
			this.disableMove();
			this.cursor.reset();
		}
	};

	private onScroll = (ev: Event) => {
		if (this.isSpacePress) {
			ev.preventDefault();
		}
	};
}

export default ManipulatorCamera;
