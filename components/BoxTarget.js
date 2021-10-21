import { Box } from '@chakra-ui/core';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../utils/items';
import { useContext } from 'react';
import { CardContext } from '../pages/tasks';


const BoxTarget = props => {
	const { markAsDone } = useContext(CardContext);

	const [{ isOver }, drop] = useDrop({
		accept: ItemTypes.CARD,
		drop: (item, monitor) => markAsDone(item.id),
		collect: monitor => ({
			isOver: !!monitor.isOver(),
		}),
	});

	return (
		<Box
			ref={drop}
			m={2}
			p={3}
			boxShadow='sm'
			// bg={isOver ? 'green.500' : 'green.200'}
			backgroundImage="linear-gradient(0deg, transparent 24%, rgba(91, 91, 91, .1) 25%, rgba(91, 91, 91, .1) 26%, transparent 27%, transparent 74%, rgba(91, 91, 91, .1) 75%, rgba(91, 91, 91, .1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(91, 91, 91, .1) 25%, rgba(91, 91, 91, .1) 26%, transparent 27%, transparent 74%, rgba(91, 91, 91, .1) 75%, rgba(91, 91, 91, .1) 76%, transparent 77%, transparent);"
			backgroundSize="50px 50px"
			bg="white"
			
			minH='100vh'
			textAlign='center'
			w='100%'
			rounded='md'
			color='white'>
			{props.children}
		</Box>
		// <div
		// ref={drop}
		// bg={isOver ? 'green.500' : 'green.200'}
		// >
		// 	{props.children}
		// </div>
	);
};

export default BoxTarget;
