import { ItemTypes } from '../utils/items';
import { useDrag } from 'react-dnd';
import {Textarea} from '@chakra-ui/core';


const ContainerComp = (props) => {
    const [{ isDragging }, drag] = useDrag({
        item: {
            type: ItemTypes.CARD,
            id: props._id,
        },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    });

    return (
        <div ref={drag} 
        opacity={isDragging ? '0.5' : '1'}
        style={{marginTop:"15px"}}>
            <Textarea placeholder="Here is a sample placeholder" />
        </div>
    )
}

export default ContainerComp
