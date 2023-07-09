import React from "react"

	// setflag(props1){
 //    	if(isNaN(props1) && !this.state.flag){
 //    		if (props1 === "+"){
 //    			console.log("update flag",this.state.flag,props1)
 //    			this.setState({
 //    				flag:"add"
 //    			})
 //    			console.log("updated flag",this.state.flag)
 //    		}
 //    		else if (props1 === "-") {
 //    			this.setState({
 //    				flag:"sub"
 //    			})
 //    		}
 //    		else if (props1 === "*") {
 //    			this.setState({
 //    				flag:"mul"
 //    			})
 //    		}
 //    		else if (props1 === "/") {
 //    			this.setState({
 //    				flag:"div"
 //    			})
 //    		}
 //    	}
 //    	console.log("props",this.state.flag,props1)
 //    	this.isnumber(props1)
    	
 //    }


 //    isnumber(props){
 //    	if(!isNaN(props) && !this.state.flag) {
 //    		let newnumber = this.state.firstNumber + props
 //    		console.log("firstNumber",newnumber)
 //    		this.setState({
 //                firstNumber:newnumber

 //    	    })
 //    	}
 //    	if(!isNaN(props) && this.state.flag) {
 //    		let newnumber1 = this.state.secondNumber + props
 //    		this.setState({
 //    			secondNumber:newnumber1,
 //    			flag:""
 //    	    	})
 //    	}
 //    	if (isNaN(props)){
 //    		if(this.state.flag === "add")  {
 //    			let newnumber2 = this.state.firstNumber + this.state.secondNumber
 //    			this.setState({
 //    				firstNumber: newnumber2
 //    		    })
 //    		}	
 //    	}
 //    	console.log(this.state.firstNumber)

 //    }

    


class Calculate extends React.Component {
	constructor(){
		super()
		this.state={
			answer:""
		}
		this.calculateAnswer=this.calculateAnswer.bind(this)
	}
    
    calculateAnswer(){
    	let props1 = -1
    	let danswer=""
    	const { calc } = this.props
    	for(var i =0; i < calc.length;i++){
    		if(isNaN(calc[i])){
    			props1= i;
    			break;
    		}
    	}

    	let count_array = ""
    	for( i=0; i < props1;i++) {
    		count_array = count_array+calc[i];
    	}
    	let count_array1 = ""
    	for( i= props1+1; i < calc.length; i++){
    		count_array1 = count_array1+calc[i]
    	}
    	console.log(props1,"calcualted array",count_array,count_array1)
    	if(calc[props1] === "+"){
    		danswer= parseInt(count_array,10) + parseInt(count_array1,10)
    	}
    	else if(calc[props1] === "-"){
    		danswer= parseInt(count_array,10) - parseInt(count_array1,10)
    	}
    	else if(calc[props1] === "*"){
    		danswer= parseInt(count_array,10) * parseInt(count_array1,10)
    	}
    	else if(calc[props1] === "/"){
    		danswer= parseInt(count_array,10) / parseInt(count_array1,10)
    	}

    	return(
    		<h1>= {danswer}</h1>
    		)

    }


	render(){
		
			// return <div> {(this.props.calc[item]) => this.setflag(this.props.calc[item])} </div>

		return(
			<div>
			{this.calculateAnswer()}
			</div>
		)
		
	}
}

export default Calculate