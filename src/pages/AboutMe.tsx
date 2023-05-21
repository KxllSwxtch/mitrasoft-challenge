import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const AboutMe: React.FC<{}> = (): JSX.Element => {
	return (
		<Row className='p-4'>
			<Col>
				<b>Меня зовут Дмитрий</b>, я Front-End разработчик с 3-мя годами
				коммерческого опыта. Работаю с технологиями: 1. React.js (Next.js,
				Remix.js) 2. MongoDB 3. Python (Django, Flask, RestAPI) 4.
				Figma/Photoshop 5. Vanilla JavaScript 6. HTML/CSS (Tailwind, SASS,
				Material UI, Less) 7. Supabase 8. Webpack
				<br />
				<br />
				<b>Английский на уровне продвинутого (образование получил в Канаде)</b>
				<br />
				<br />
				<i>
					Кратко о своём опыте: Работал в-основном на фрилансе в Канаде.{' '}
					<b>Так же есть коммерческий опыт в канадских компаниях.</b>
				</i>
				<br />
				<br />
				Проект в котором я разработал Landing page и так же учавствовал в
				разработке кода для обработки запросов blockchain:{' '}
				<a href='https://www.walletcs.com/' target='__blank'>
					Ссылка
				</a>
				<br />
				<br />
				Проект в котором я принял участие в разработке RSS генератора:{' '}
				<a href='https://rss.app/' target='__blank'>
					Ссылка
				</a>
				<br />
				<br />
				Мой Github:{' '}
				<a href='https://github.com/KxllSwxtch' target='__blank'>
					Ссылка
				</a>
			</Col>
		</Row>
	)
}

export default AboutMe
