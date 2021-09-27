
import { ItemTypes } from '../utils/items';
import { useDrag } from 'react-dnd';
import { Button} from '@chakra-ui/core';
import {Resizable} from 're-resizable'


const ButtonComp = props => {
    
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
            <Resizable>
            <Button colorScheme="blue" style={{color:"white",backgroundColor:"indigo"}} size="lg">
                Button
            </Button>
            </Resizable>
        </div>
    )
}

export default ButtonComp
