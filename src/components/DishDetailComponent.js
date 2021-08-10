import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class Details extends Component
{

    
    render()
    {
        

        if(this.props.Dish != null)
        {

            const Comments = this.props.Dish.comments.map((Comment) => {
                return (
                    <div>                                          
                        <CardText>{Comment.comment}</CardText>
                        <CardText className="mb-3">--{Comment.author}, {Comment.date}</CardText>                                       
                    </div>
                );
            });

            return(
                <div className="row">
                    <div className="col-12 col-md-5 m-1"> 
                        <Card>
                            <CardImg width="100%" src={this.props.Dish.image} alt={this.props.Dish.name} />
                            <CardBody>
                                <CardTitle>{this.props.Dish.name}</CardTitle>
                                <CardText>{this.props.Dish.description}</CardText>
                            </CardBody>
                        </Card>                      
                    </div>  
                    <div className="col-12 col-md-5 m-1">
                        <CardTitle>Comments</CardTitle>
                        {Comments}
                    </div>
                </div>
            );
        }

        return(
         <div></div>    
        )
        
    }

}

export default Details;