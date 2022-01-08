import '../App.css';
import {CardRevealList} from './RafflesReveal/constant'
import {Container, Grid} from "@mui/material";
import DraggableImageList from "../component/Draggable/DraggableImageList";
import Section from "../component/Section";
import DraggableDropoffBox from "../component/Draggable/DraggableDropoffBox"

const App=()=> {
  return (
              <Container className="App" style={{minHeight: "100vh"}}>
                  <Grid container spacing={2}>
                      <Grid xs={4} md={4} item >
                          <Section>
                              <DraggableImageList itemData={CardRevealList} />

                          </Section>
                      </Grid>
                      <Grid xs={8} md={4} item >
                          <Section>
                              <DraggableDropoffBox />
                          </Section>
                      </Grid>
                  </Grid>

              </Container>

  );
}



export default App;
