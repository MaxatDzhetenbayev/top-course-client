import React from 'react';
import classnames from 'classnames';

import ArrowSvg from './arrow.svg';
import { ButtonProps } from './Button.props';

import styles from './Button.module.scss';

export const Button = ({ children, appearance, arrow = 'none', className, ...props }: ButtonProps) => {
	return (
		<button className={classnames(styles.button, className, {
			[styles.primary]: appearance === 'primary',
			[styles.ghost]: appearance === 'ghost',
		})}
			{...props}
		>
			{children}
			{arrow !== 'none' && <span className={classnames(styles.arrow, {
				[styles.down]: arrow === 'down'
			})} >
				<ArrowSvg />
			</span>}
		</button>
	);
};
