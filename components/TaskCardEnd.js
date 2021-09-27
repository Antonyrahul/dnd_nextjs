import { Box, Badge, Text, Flex } from '@chakra-ui/core';
import { ItemTypes } from '../utils/items';
import { useDrag } from 'react-dnd';
import {Resizable} from 're-resizable'
import FreeTransform from "react-free-transform";


const TaskCard = props => {
	const [{ isDragging }, drag] = useDrag({
		item: {
			type: ItemTypes.CARD,
			id: props._id,
		},
		collect: monitor => ({
			isDragging: !!monitor.isDragging(),
		}),
	});

	function onUpdate(id, payload) {
		setState(
			state.map(item => {
			  if (item.id === id) {
				return {
				  ...item,
				  ...payload
				};
			  }
			  return item;
			})
		  );
		}
	

	return (
		<FreeTransform
		key={props.id}
		onUpdate={payload => onUpdate(props.id, payload)}
		{...props}
	  >
		<div
		  className="element"
		  style={{
			width: props.width,
			height: props.height,
			background: props.background,
			...props.styles
		  }}
		>
		  {props.title}
		</div>
	  </FreeTransform>
		// <Resizable>
		// <Box
			
		// 	my='4'
		// 	p={3}
		// 	bg='gray.500'
		// 	opacity={isDragging ? '0.5' : '1'}
		// 	boxShadow='sm'
		// 	w='100%'
		// 	rounded='md'
		// 	color='white'>
		// 	<Flex justify='space-between' my='2'>
		// 		<Text fontSize='lg' fontWeight='semibold'>
		// 			{props.title}
		// 		</Text>
		// 		<Badge
		// 			variantColor={props.category === 'Chores' ? 'green' : 'red'}
		// 			h='100%'>
		// 			{props.category}
		// 		</Badge>
		// 	</Flex>
		// 	<Text textAlign='center' fontSize='md'>
		// 		{props.details}
		// 	</Text>
		// </Box>
		// </Resizable>
	);
};

export default TaskCard;
