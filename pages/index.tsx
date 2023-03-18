import { Button } from '../components/UI';

export default function Home(): JSX.Element {

	return (
		<>
			<Button appearance='primary' arrow='right'>Узнать подробнее</Button>
			<Button appearance='ghost' arrow='down'>Читать отзывы</Button>
		</>
	);
}
