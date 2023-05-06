import FrameArea from '../utils/FrameArea';

class ManipulatorCanvas {
	private readonly DEFAULT_WIDTH = 3840;
	private readonly DEFAULT_HEIGHT = 2160;
	private readonly BACKGROUND_VALUE = 'linear-gradient(#000, transparent 1px),'
		+ 'linear-gradient(90deg, #000, transparent 1px)';

	private readonly canvasElement: HTMLElement;
	private readonly configuration: FrameArea;

	constructor() {
		this.configuration = {
			x: 0,
			y: 0,
			width: this.DEFAULT_WIDTH,
			height: this.DEFAULT_HEIGHT,
		};
		this.canvasElement = document.createElement('canvas');
		this.applyConfiguration();
	}

	public setConfiguration = (fn: (conf: FrameArea) => FrameArea) => {
		const currentConfiguration = this.getConfiguration();
		const updatedConfiguration = fn(currentConfiguration);

		this.configuration.x = updatedConfiguration.x;
		this.configuration.y = updatedConfiguration.y;
		this.configuration.width = updatedConfiguration.width;
		this.configuration.height = updatedConfiguration.height;

		this.applyConfiguration();
	};

	public getConfiguration = (): FrameArea => ({ ...this.configuration });

	private applyConfiguration = () => {
		this.canvasElement.style.position = 'absolute';
		this.canvasElement.style.width = `${this.DEFAULT_WIDTH}px`;
		this.canvasElement.style.height = `${this.DEFAULT_HEIGHT}px`;
		this.canvasElement.style.background = this.BACKGROUND_VALUE;
		this.canvasElement.style.backgroundSize = '30px 30px';
		this.canvasElement.style.left = `${this.DEFAULT_WIDTH / 2 - this.configuration.x}px`;
		this.canvasElement.style.top = `${this.DEFAULT_HEIGHT / 2 - this.configuration.y}px`;
	};

	public getElement = (): HTMLElement => this.canvasElement;

	public destructor = () => {
		this.canvasElement.remove();
	};
}

export default ManipulatorCanvas;
