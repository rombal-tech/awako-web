class CursorView {
	private readonly targetElement: HTMLElement;

	constructor(element: HTMLElement) {
		this.targetElement = element;
	}

	public enableGrab = () => {
		console.log('enableGrab');
		this.targetElement.style.cursor = 'grab';
	};

	public enableGrabbing = () => {
		console.log('enableGrabbing');
		this.targetElement.style.cursor = 'grabbing';
	};

	public reset = () => {
		this.targetElement.style.cursor = 'default';
	};
}

export default CursorView;
