import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const RecipeCardCardapio =(props)=>{

    return (
        <RecipeCardContainer onClinck={props.onClinck}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt= {props.title}
              height={"150px"}
              image={props.img}
              title={props.title}
            />
            <CardContent>
              <Typography align={"center"} >
                  {props.title.toUpperCase}
              </Typography>
            </CardContent>
          </CardActionArea>

        </RecipeCardContainer>
      );
    }
    export default  RecipeCardCardapio  ;

 
