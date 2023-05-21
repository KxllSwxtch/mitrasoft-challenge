import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'

const Loader: React.FC<{}> = (): JSX.Element => {
	return (
		<Button
			variant='primary'
			disabled
			className='position-absolute top-50 start-50 translate-middle-x'
		>
			<Spinner
				as='span'
				animation='grow'
				size='sm'
				role='status'
				aria-hidden='true'
			/>
			<span className='ml-4 d-inline-block'>Loading...</span>
		</Button>
	)
}

export default Loader
