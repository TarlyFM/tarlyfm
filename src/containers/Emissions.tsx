import * as React from "react";
import * as ReactDOM from "react-dom";
import styled from 'styled-components';
import {Emission,} from "../components/Emission";


const Inline = styled.li`
  display: inline;
`;

interface EmissionAPI {
  starts: string,
  ends: string,
  emission: {
    title: string,
    pitch: string,
    host: string,
    picture_link:string
  }
}
interface EmissionsState {
  list: Array<EmissionAPI>
}
interface EmissionsProps {
  url: string
}
export class Emissions extends React.Component<EmissionsProps, EmissionsState> {

  constructor (props) {
    super(props);
    this.state = {
      list: []
    };
    fetch(props.url)
    .then( response => response.json() )
    .then( json => {
      this.setState((prevState, props) => ({
        list: prevState.list.concat(json.results)
      })
    )})
    console.log('pute');
  }

  render () {
    console.log(this.state.list)
    const listEmissions = this.state.list.slice(0,3).map((emission) =>
    <Inline key={emission.starts}>
      <Emission picture_link={emission.emission.picture_link} pitch={emission.emission.pitch} title={emission.emission.title}/>
    </Inline>
    )
    return <ul>
      {listEmissions}
    </ul>
  }
}
