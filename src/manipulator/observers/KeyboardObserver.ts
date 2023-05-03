interface KeyboardObserverSubscriber {
	action: (ev: KeyboardEvent) => void;
}

class KeyboardObserver {
	private readonly keyUpSubscribers: KeyboardObserverSubscriber[];
	private readonly keyDownSubscribers: KeyboardObserverSubscriber[];

	constructor() {
		this.keyUpSubscribers = [];
		this.keyDownSubscribers = [];

		document.addEventListener('keyup', this.onKeyUp);
		document.addEventListener('keydown', this.onKeyDown);
	}

	public subscribeKeyUp = (subscriber: (ev: KeyboardEvent) => void) => {
		this.keyUpSubscribers.push({ action: subscriber });
	};

	public subscribeKeyDown = (subscriber: (ev: KeyboardEvent) => void) => {
		this.keyDownSubscribers.push({ action: subscriber });
	};

	public destructor = () => {
		document.removeEventListener('keyup', this.onKeyUp);
		document.removeEventListener('keydown', this.onKeyDown);
	};

	private onKeyUp = (ev: KeyboardEvent) => {
		this.callKeyUpSubscribers(ev);
	};

	private onKeyDown = (ev: KeyboardEvent) => {
		this.callKeyDownSubscribers(ev);
	};

	private callKeyUpSubscribers = (ev: KeyboardEvent) => {
		this.keyUpSubscribers.forEach(subscriber => {
			subscriber.action(ev);
		});
	};

	private callKeyDownSubscribers = (ev: KeyboardEvent) => {
		this.keyDownSubscribers.forEach(subscriber => {
			subscriber.action(ev);
		});
	};
}

export default KeyboardObserver;
