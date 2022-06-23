import React, { useCallback, useState } from 'react';

export const useDisclosure = () => {
	const [isOpen, setIsOpen] = useState(false);
	const open = () => setIsOpen(true);
	const close = () => setIsOpen(false);
	const toggle = () => setIsOpen(!isOpen);

	return {
		toggle,
		isOpen,
		close,
		open,
	};
};
