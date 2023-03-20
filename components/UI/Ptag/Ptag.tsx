import React from 'react';
import classnames from 'classnames';

import { PtagProps } from './Ptag.props';

import styles from './Ptag.module.scss';

export const Ptag = ({ children, size, className, ...props }: PtagProps) => {
	return (
		<p className={classnames(styles.paragraph, className, {
			[styles.small]: size === 'small',
			[styles.medium]: size === 'medium',
			[styles.big]: size === 'big',
		})}
			{...props}
		> {children}</p >
	);
};
