export interface MouseObserverEvent {
	(ev: MouseEvent): void
}

interface MouseDownSubscriber {
	action: MouseObserverEvent
}

class MouseObserver {
	private readonly mouseUpSubscribers: MouseDownSubscriber[];
	private readonly mouseDownSubscribers: MouseDownSubscriber[];

	constructor() {
		this.mouseUpSubscribers = [];
		this.mouseDownSubscribers = [];

		document.addEventListener('mouseup', this.onMouseUpAction);
		document.addEventListener('mousedown', this.onMouseDownAction);
	}

	public subscribeMouseUp = (action: MouseObserverEvent) => {
		this.mouseUpSubscribers.push({ action });
	};

	public subscribeMouseDown = (action: MouseObserverEvent) => {
		this.mouseDownSubscribers.push({ action });
	};

	public destructor = (): void => {
		document.removeEventListener('mouseup', this.onMouseUpAction);
		document.removeEventListener('mousedown', this.onMouseDownAction);
	};

	private onMouseUpAction = (ev: MouseEvent) => {
		this.mouseUpSubscribers.forEach(subscriber => subscriber.action(ev));
	};

	private onMouseDownAction = (ev: MouseEvent) => {
		this.mouseDownSubscribers.forEach(subscriber => subscriber.action(ev));
	};
}

export default MouseObserver;
