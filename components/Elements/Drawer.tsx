import React from 'react';
import { FaTimes } from 'react-icons/fa';

type DrawerProps = {
	children: React.ReactNode;
	isOpen: boolean;
	close: () => void;
};

export const Drawer = ({ children, isOpen, close }: DrawerProps) => {
	return (
		<div className={`drawer ${isOpen ? 'open' : ''}`}>
			<div className="drawer__header">
				<span className="icon" onClick={close}>
					<FaTimes />
				</span>
			</div>
			<div className="drawer__content">{children}</div>
		</div>
	);
};
