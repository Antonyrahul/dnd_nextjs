import { Box, Grid, Stack, Text } from '@chakra-ui/core';
import { useState, createContext,useRef } from 'react';
import ReactDOM from 'react-dom';

import TaskCardEnd from '../components/TaskCardEnd'
import TaskCard from '../components/TaskCard';
import BoxTarget from '../components/BoxTarget';
import ButtonComp from '../components/ButtonComp';
import ContainerComp from '../components/ContainerComp';
import FreeTransform from "react-free-transform";
import { Button} from '@chakra-ui/core';
import ContentEditable from "react-contenteditable";




export const CardContext = createContext({
	markAsDone: null,
});

const Tasks = () => {
	

	const [taskList, setTaskList] = useState([
		{
			// _id: (Math.random() * 100).toFixed(0),
			_id :"el-2",
			status: 'wip',
			category: 'Button',
			title: 'Button',
			details: 'this will be a button',
		},
		{
			_id: (Math.random() * 100).toFixed(0),
			status: 'wip',
			category: 'Container',
			title: 'Container',
			details: 'This will be a container',
		},
		{
			_id: "el-1",
			status: 'wip',
			category: 'Card',
			title: 'Card',
			details: 'This will be a card',
		},
	]);

	const [state,setState] = useState([
    
		{
		  title: "Card",
		  _id: "el-1",
		  x: 100,
		  y: 50,
		  scaleX: 1,
		  scaleY: 1,
		  width: 100,
		  height: 100,
		  angle: 0,
		  background: "linear-gradient(135deg, #0FF0B3 0%,#036ED9 100%)",
		  classPrefix: "tr"
		},
		{
			title:"Button",
		  _id: "el-2",
		  x: 225,
		  y: 225,
		  scaleX: 1,
		  scaleY: 1,
		  width: 100,
		  height: 100,
		  angle: 0,
		  background: "linear-gradient(135deg, #fad961 0%,#f76b1c 100%)",
		  classPrefix: "tr2",
		  text: "Scale Enabled",
		  styles: {
			padding: 5
		  }
		},
		{
			title:"card",
		  _id: "el-3",
		  x: 100,
		  y: 225,
		  scaleX: 1,
		  scaleY: 1,
		  width: 100,
		  height: 100,
		  angle: 0,
		  background: "linear-gradient(135deg, #fad961 0%,#f76b1c 100%)",
		  classPrefix: "tr2",
		  text: "Scale Disabled",
		  styles: {
			padding: 5,
			width: "100%",
			height: "100%"
		  },
		  disableScale: true
		},
		{
			title:"card",
		  _id: "el-4",
		  x: 100,
		  y: 400,
		  scaleX: 1,
		  scaleY: 1,
		  width: 100,
		  height: 100,
		  angle: 45,
		  background: "linear-gradient(135deg, #b1ea4d 0%,#459522 100%)",
		  classPrefix: "tr3"
		}
	]
	  );
	const [doneList,setDoneList] = useState([]);
	const [actualList,setActualList]= useState([]);

	const markAsDone = _id => {
		console.log(_id)
		const task = taskList.filter((task, i) => task._id === _id);
		task[0].status = 'done';
		console.log(task[0])
		console.log(state)
		const newTask= state.filter((newtask,i)=>newtask._id === _id)
		console.log(newTask)
		newTask[0].ordId=Math.floor(Math.random()*10000)
		
		console.log(doneList)
		// setDoneList([...doneList,task[0]])
		
		setDoneList([...doneList,newTask[0]]);
		
		setActualList([...actualList,newTask[0]])
		console.log(doneList)
		//setTaskList(taskList.filter((task, i) => task._id !== _id).concat(task[0]));

	};
	const processComponent = (task) => {
		switch(task.title) {

			case "Button": return <ButtonComp
				key={task._id.toString()}
				_id={task._id}
				category={task.category}
				title={task.title}
				details={task.details}
			/>;
			case "Card": return <TaskCard
				key={task._id.toString()}
				_id={task._id}
				category={task.category}
				title={task.title}
				details={task.details}
			/>;
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
	//   function onUpdate(id, payload) {
	// 	  console.log(id)
	// 	setState(
	// 		state.map(item => {
	// 		  if (item._id === id) {
	// 			return {
	// 			  ...item,
	// 			  ...payload
	// 			};
	// 		  }
	// 		  return item;
	// 		})
	// 	  );
	// 	  console.log(state)
	// 	}

		/* Function name onUpdate 
		Triggerd on any changes to position and width of any component. 
		This is the function that gets the position coordinates and the width and height at any given point
		
	
	*/

	function onUpdate(id, payload,task) {
		console.log(id,payload,task)
		var mainelem = document.getElementById("podadei").getBoundingClientRect()
		
		console.log(mainelem)
		var elem = document.getElementById(id).getBoundingClientRect()
		
		 console.log(elem)
		 
		 
		
		// console.log(summa)

	  setDoneList(
		  doneList.map(item => {
			if (item.ordId === id) {
				item.org_x=String(Math.floor(((elem.x-mainelem.x-9)*100)/mainelem.width))+"%";
				item.org_y=String(Math.floor(((elem.y-mainelem.y-7)*100)/mainelem.height))+"%";
				item.org_width=String(Math.floor((elem.width*100)/mainelem.width))+"%";
				item.org_height=String(Math.floor((elem.height*100)/mainelem.height))+"%";
			  return {
				...item,
				...payload,
				
			  };
			}
			return item;
		  })
		);
		console.log(state)

	  }

	  /* Function name savedata

	  Saves the json to the localstoreage for retrival during preview

	 
	  */
	  function saveData(){
		   var elemWiddth= document.getElementById("podadei").offsetWidth
		  console.log(elemWiddth)
		
		  //autm
		  var finList = doneList.map(item=>({...item}))
		  
		  finList.forEach(item=>item.classPrefix="na")
		  console.log(doneList,finList)
		  const duparr= finList.map(item=>({...item}))
		  console.log(duparr)
		
		  duparr.forEach(function(item){
			item.actual_x=String(Math.floor((item.x*100)/(elemWiddth*item.scaleX)))+"%";
			item.actual_y=String(item.y/item.scaleY)+"px";
		  })
		  console.log(duparr)
		  localStorage.setItem("jsonData",JSON.stringify(duparr))
	  }

	  /*Identifies the component and arranges it accordingly   */
	  const [testPara,setTextPara] = useState({html: "Edit <b>mesdrftdrtdtdtdrt</b> !"});
	 const handleChange = evt => {
		 console.log(evt)
		setTextPara({ html: evt.target.value });
	  };
	  const consoleit=()=>{
		  console.log("clickerss")
	  }
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
			onUpdate={payload => onUpdate(task.ordId, payload,task)}
			{...task}
		  >
				
				<Button id= {task.ordId} colorScheme="blue" style={{color:"white",backgroundColor:"indigo"}} size="lg">
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
			return <FreeTransform
			
			key={task._id}
			onUpdate={payload => onUpdate(task.ordId, payload,task)}
			{...task}
		  >
			  	
			<div
			id= {task.ordId}
			contentEditable="true"
			onClick={consoleit}
			  className="element"
			  style={{
				width: task.width,
				height: task.height,
				background: task.background,
				...task.styles
			  }}
			>
			   {task.title} 
			  {/* <ContentEditable
			  onClick={console.log("clicked")}
				html = {testPara.html}
				
				onChange={handleChange}
				>
					</ContentEditable> */}
			
			</div>

			
		  </FreeTransform>
		  
		  
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


	return (
		
		<CardContext.Provider value={{ markAsDone }}>
			<Grid
				gap={6}
				templateColumns='1fr 3fr'
				bg='gray.500'
				w='100vw'
				h='93vh'
				p={3}>
				<Box bg='gray.200' rounded='md' p={3} boxShadow='md'>
					<Stack spacing={3}>
					
					<ContentEditable
				html = {testPara.html}
				disabled={false}
				onChange={handleChange}
				>
					</ContentEditable>
				<div
				onClick={consoleit}
				contentEditable="true"
				>
lmaio

				</div>
				
						<Text fontSize='2xl' textAlign='center'>
							Components
						</Text>
													
	
						{taskList
							
							.map((task, i) => (
								// <TaskCard
								// 	key={task._id.toString()}
								// 	_id={task._id}
								// 	category={task.category}
								// 	title={task.title}
								// 	details={task.details}
								// />
								processComponent(task) 
							))}
					</Stack>
				</Box>
				<Box bg='blue.200' rounded='md' p={3} boxShadow='md'>
					<Stack>
						<Text fontSize='2xl' textAlign='center'>
							Editor
						</Text>
						<Button onClick={saveData}>
							SAVE
						</Button>
						<div id="podadei" className="editorclass">

						
						<BoxTarget >

							
							
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
								
								
						</BoxTarget>
						
						</div>
					</Stack>
				</Box>
			</Grid>
		</CardContext.Provider>
	);
};

export default Tasks;
