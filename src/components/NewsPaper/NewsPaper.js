import { Avatar, Card, CardContent, CardHeader, CardMedia, Grid, IconButton, Typography } from '@mui/material';
import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
const NewsPaper = (props) => {
    const {title, description, urlToImage} = props.news;
    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    avatar={
                        <Avatar style={{background:'blue', width:'50px', height:'50px'}} aria-label="recipe">
                            Tapu
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={title}
                    subheader="May 6, 2022"
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={urlToImage}
                    alt="News Paper"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default NewsPaper;