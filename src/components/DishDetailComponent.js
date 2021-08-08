import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class Details extends Component
{

    
    render()
    {
        console.log(this.props);

        if(this.props.Dish != null)
        {
            return(
                <Card>
                    <CardImg src={this.props.Dish.image} alt={this.props.Dish.name} />
                    <CardBody>
                        <CardTitle>{this.props.Dish.name}</CardTitle>
                        <CardText>{this.props.Dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        return(
         <div></div>    
        )
        
    }

}

export default Details;