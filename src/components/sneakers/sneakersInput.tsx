import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setInputValue } from '../../redux/sneakers/slice'
import search from '../../assets/search.svg'
import { selectSneakers } from '../../redux/sneakers/selectors'

const SneakersInput: React.FC = () => {
	const { inputValue } = useSelector(selectSneakers)
	const dispatch = useDispatch()

	const inputRef = React.useRef<HTMLInputElement>(null)
	const onChangeValue = (e: any) => {
		dispatch(setInputValue(e.target.value))
	}
	const clearInput = () => {
		dispatch(setInputValue(''))
		inputRef.current?.focus() // выполняется только в том случае если inputRef не вернет null, и таким образом после очистки input, фокус не будет слетать
	}
	return (
		<div className='sneakers-input'>
			<input
				ref={inputRef}
				onChange={e => onChangeValue(e)}
				value={inputValue}
				type='text'
				placeholder='Поиск...'
			/>
			<img className='sneakers-input-search' src={search} alt='img' />
			{inputValue !== '' ? (
				<svg
					onClick={() => clearInput()}
					className='sneakers-input-close'
					xmlns='http://www.w3.org/2000/svg'
					width='16px'
					height='16px'
					viewBox='0 0 16 16'
					fill='#cacaca'
				>
					<path
						fill-rule='evenodd'
						d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z'
					/>
				</svg>
			) : (
				''
			)}
		</div>
	)
}

export default SneakersInput
