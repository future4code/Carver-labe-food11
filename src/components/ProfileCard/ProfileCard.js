import React from 'react';
import { CardActionArea, CardMedia, Typography } from '@material-ui/core';
import { RecipeCardContainer, RecipeCardContent } from './styled';

const ProfileCard = (props) => {

    return (
        <ProfileCardContainer onClick={props.onClick}>
            <CardActionArea>
                <CardMedia
                  component={'img'}
                  alt={props.title}
                  height={'150px'}
                  image={props.image}
                  title={props.title}
                />
                <ProfileCardContent>
                <Typography align={'center'}>
                  {props.title}
                </Typography>
                </ProfileCardContent>
            </CardActionArea>
        </ProfileCardContainer>
    )
}

export default ProfileCard