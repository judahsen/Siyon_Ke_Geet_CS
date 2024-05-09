import { Container } from "react-bootstrap"
import { SongIndex} from "../Components/SongIndex"

export function SongsPage(){
    return (
    <Container>
        
        <h1>This is the SongsPage</h1>
        <SongIndex />
    </Container>
    )
}