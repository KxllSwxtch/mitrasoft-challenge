import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const AboutMe: React.FC<{}> = (): JSX.Element => {
	return (
		<Row className='p-4'>
			<Col>
				Здравствуйте,
				<br />
				<br />
				Меня зовут Дмитрий, я Front-End разработчик с 3-мя годами коммерческого
				опыта. Работаю с технологиями: 1. React.js (Next.js, Remix.js) 2.
				MongoDB 3. Python (Django, Flask, RestAPI) 4. Figma/Photoshop 5. Vanilla
				JavaScript 6. HTML/CSS (Tailwind, SASS, Material UI, Less) 7. Supabase
				8. Webpack
				<br />
				<br />
				Английский на уровне продвинутого (образование получил в Канаде)
				<br />
				<br />
				Кратко о своём опыте: Работал в-основном на фрилансе в Канаде. Так же
				есть коммерческий опыт в канадских компаниях.
				<br />
				<br />
				Проект в котором я разработал Landing page и так же учавствовал в
				разработке кода для обработки запросов blockchain:
				https://www.walletcs.com/
				<br />
				<br />
				Проект в котором я принял участие в разработке RSS генератора:
				https://rss.app/
				<br />
				<br />
				Мой Github: https://github.com/KxllSwxtch
			</Col>
		</Row>
	)
}

export default AboutMe
