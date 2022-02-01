import React,{Component} from 'react';
import {Switch} from "react-router-dom";
import FancyRoute from '../../components/loadingBar/loadingBar';
import routes from './routes';
class Index extends Component{

    componentDidMount(){
       
    }

    render(){
        return(
            <>
                <Switch>
                    {routes.map((route, i) =>
                        <FancyRoute key={i} {...route} />
                    )}
                </Switch>          
            </>
        );
    }   
}
export default Index;

/**<Route path='/Admin' exact={true} component={()=>{<AddProduct/>}}/>
                <Route path='' component={()=>{<AddProduct/>}}/> */