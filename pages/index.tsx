import { Button } from '../components/UI';
import { Ptag } from '../components/UI/Ptag/ptag';

export default function Home(): JSX.Element {

	return (
		<>
			<Button appearance='primary' arrow='right'>Узнать подробнее</Button>
			<Button appearance='ghost' arrow='down'>Читать отзывы</Button>
			<Ptag size='small'>paragraph</Ptag>
		</>
	);
}
