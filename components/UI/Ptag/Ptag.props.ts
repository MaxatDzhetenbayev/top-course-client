import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from 'react';

export interface PtagProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
	children: ReactNode,
	size: 'small' | 'medium' | 'big'
}