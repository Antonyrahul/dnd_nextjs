import React,{useEffect,useState} from 'react';
import { Box, Grid, Stack, Text,Button ,Flex} from '@chakra-ui/core';
import FreeTransform from "react-free-transform";



const preview = () => {
    const [doneList,setDoneList] = useState([]);
    useEffect(()=>{
        const data = localStorage.getItem("jsonData");
        console.log(data)
        setDoneList(JSON.parse(data))
        console.log(doneList)
    },[])
       
  setTimeout(() => {
      console.log(doneList)
      console.log(typeof(doneList))
  }, 2000);


  const processComponentEnd = (task) => {
		 
    switch(task.title) {

        case "Button": 
        // <ButtonComp
        // 	key={task._id.toString()}
        // 	_id={task._id}
        // 	category={task.category}
        // 	title={task.title}
        // 	details={task.details}
        // />;
        return <FreeTransform
        key={task._id}
        
        {...task}
      >
            
            <Button colorScheme="blue" style={{color:"white",backgroundColor:"indigo"}} size="lg">
                Button
            </Button>
            
    
        </FreeTransform>;
         case "Card": 
         //return <TaskCardEnd
        // 	key={task._id.toString()}
        // 	_id={task._id}
        // 	category={task.category}
        // 	title={task.title}
        // 	details={task.details}
        // 	id= "el-1"
        //     x={100}
        //     y={50}
        // 	scaleX={1}
        // 	scaleY={1}
        // 	width={100}
        // 	height={100}
        // 	angle={0}
        // 	background="linear-gradient(135deg, #0FF0B3 0%,#036ED9 100%)"
        // 	classPrefix= "tr"
        // />;
        // return 	 <FreeTransform
        //   key={task._id}
        //   x={100}
        //   y={50}
          
        //   scalex={1}
        //   scaley={1}
        //   {...task}
          
        // >
          
        //   <div
            
        //     style={{
              
             
        //       width: task.width,
        //       height: task.height,
        //       background: task.background,

              
              
              
        //       ...task.styles
        //     }}
        //     >
          
        //     {task.title}
        //     </div>
            
         
        //  </FreeTransform>
        
       return  <div
      //   <FreeTransform
      //   key={task._id}
      //   x={100}
      //   y={50}
        
      //   scalex={1}
      //   scaley={1}
      //   {...task}
        
      // >
        

          
          style={{
            position:"absolute",
           
            width: task.org_width,
            height: task.org_height,
            background: task.background,
            scale:(task.scaleX,task.scaleY),
           
            left:task.org_x,
            top:task.org_y,
            
            
            
            ...task.styles
          }}
        >
          {task.title}
          
        </div>
      // </FreeTransform>
      
        case "Container": return <ContainerComp
        key={task._id.toString()}
        _id={task._id}
        category={task.category}
        title={task.title}
        details={task.details}
        />;
        case "four": return <ComponentD />;

        default: return <h1>No project match</h1>
    }
  } 
      

      
    return doneList.length>0? (
      <Flex w='100vw' h="100vh" position="relative">

      
   
                {doneList
                    // .filter((task, i) => task.status === 'done')
                    .map((task, i) => (
                        // <TaskCard
                        // 	key={task._id.toString()}
                        // 	_id={task._id}
                        // 	category={task.category}
                        // 	title={task.title}
                        // 	details={task.details}
                        // />
                         processComponentEnd(task) 
                    ))}
     
     </Flex>):"ope"



   
}

export default preview
