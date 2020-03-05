import React from 'react'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TodayTwoToneIcon from '@material-ui/icons/TodayTwoTone';
import ideas from './dateNightIdeas.js'

class Generator extends React.Component {
    state = {
        currentIdea: "..."
    }

    

    render() {
        const generateIdea = () => {
            const randNum = Math.floor(Math.random() * Math.floor(ideas.length))
            const idea = ideas[randNum]
            this.setState({ currentIdea: idea.idea })
        }

        return (
            <Container maxWidth="md" className="parent">
                <div className="child">
                <Typography variant="h4" gutterBottom>
                    <TodayTwoToneIcon style={{ fontSize: 80 }} /><br />
                    Date Night Idea Generator
                </Typography><br/>
                <Typography variant="h6" gutterBottom>Tonight, we should {this.state.currentIdea}</Typography><br/>
                <Button variant="contained" onClick={() => {generateIdea()}}>Pick One!</Button>
                </div>
            </Container>
        )
    }
}

export default Generator;