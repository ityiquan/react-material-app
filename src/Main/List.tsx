import * as React from 'react';
import withMovie, { MovieContext } from '../Context/Movie';

interface IMainProps {}

class List extends React.Component<IMainProps, {}> {
  public render() {
    return (
      <div style={{ marginTop: 100, marginLeft: 50 }}>
        <MovieContext.Consumer>
          {({ list }) => {
            return list.map(data => <div key={data.title}>{data.title}</div>);
          }}
        </MovieContext.Consumer>
      </div>
    );
  }
}

export default withMovie(List);
