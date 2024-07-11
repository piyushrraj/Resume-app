
import TechStackIconContainer from './TechStackIconContainer/TechStackIconContainer';
import './TechStack.css';
import {techstackRowOne,techstackRowtwo } from '../../constants';
function TechStack(){
    
    return(
        <div className='techstack_container'>
            <p className='techstack_title'>Tech Stack</p>
            <div className='techstack_icon_container'>
                {
                    techstackRowOne.map(function(element,index){
                        console.log('t is :',element)
                        console.log('i is :',index)
                        return (
                            <TechStackIconContainer 
                            key={element.iconName}
                            title={element.iconName}
                            altPropert={element.iconAltProperty}
                            image={element.iconImage}
                            />
                        )
                    })
                }
            </div>
            <div className='techstack_icon_container'>
                {
                    techstackRowtwo.map(function(element,index){
                        console.log('t is :',element)
                        console.log('i is :',index)
                        return (
                            <TechStackIconContainer 
                            key={element.iconName}
                            title={element.iconName}
                            altPropert={element.iconAltProperty}
                            image={element.iconImage}
                            />
                        )
                    })
                }
            </div>
        </div>
        
    )
}
export default TechStack;