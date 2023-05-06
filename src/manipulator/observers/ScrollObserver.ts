interface ScrollSubscriber {
	action: (ev: Event) => void,
}

class ScrollObserver {
	private readonly subscribers: ScrollSubscriber[];

	constructor() {
		this.subscribers = [];
		document.addEventListener('scroll', this.onScroll);
	}

	public subscribe = (subscriber: (ev: Event) => void) => {
		this.subscribers.push({ action: subscriber });
	};

	public destructor = () => {
		document.removeEventListener('scroll', this.onScroll);
	};

	private onScroll = (ev: Event) => {
		this.callSubscribers(ev);
	};

	private callSubscribers = (ev: Event) => {
		this.subscribers.forEach(subscriber => {
			subscriber.action(ev);
		});
	};
}

export default ScrollObserver;
