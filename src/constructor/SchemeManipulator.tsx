import React from 'react';
import Manipulator from './Manipulator';

class ConstructorComponent extends React.Component<any, any> {
	private refManipulatorContainer: React.RefObject<HTMLDivElement> = React.createRef();
	private manipulator: Manipulator | null = null;

	override componentDidMount() {
		const { structure } = this.props;
		const container = this.refManipulatorContainer.current;
		if (container === null || container === undefined) {
			throw new Error('manipulator container not found');
		}

		this.manipulator = new Manipulator(container);
	}

	override componentWillUnmount() {
		if (this.manipulator === null) {
			throw new Error('manipulator not initialized');
		}

		this.manipulator.destruct();
	}

	override render() {
		return <div ref={this.refManipulatorContainer} className="sketch-manipulator" />;
	}
}

export default ConstructorComponent;
