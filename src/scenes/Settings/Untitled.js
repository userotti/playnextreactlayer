const { injectGlobal } = styled;
const styled = styled.default;
const { StaggeredMotion, spring } = ReactMotion;

injectGlobal`
   html {
      font-kerning: normal;
      text-rendering: geometricPrecision;
      line-heigh: 1.3
    }
   * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    }`;

const aqua = '#00FFFF';
const aquaShadow = 'rgba(0, 179, 179, 0.9)';

const deepSkyBlue = '#00BFFF';
const deepSkyBlueShadow = 'rgba(0, 134, 179, 0.9)';

const aquamarine = '#7FFFD4';
const aquamarineShadow = 'rgba(51, 255, 186, 0.9)';

const midnightBlue = '#191970';
const midnightBlueShadow = 'rgba(11, 11, 49, 0.9)';

const dodgerBlue = '#1E90FF';
const dodgerBlueShadow = 'rgba(0, 106, 209, 0.9)';

const bluesMap = new Map()
bluesMap.set( 0, ['Aquamarine', aquamarine, aquamarineShadow]);
bluesMap.set( 1, ['Aqua', aqua, aquaShadow])
bluesMap.set( 2, ['Deep Sky Blue', deepSkyBlue, deepSkyBlueShadow])
bluesMap.set( 3, ['Dodger Blue', dodgerBlue, dodgerBlueShadow])
bluesMap.set( 4, ['Midnight Blue', midnightBlue, midnightBlue])


// const blues = {
//   '0': ['Aquamarine', aquamarine, aquamarineShadow],
//   '1': ['Aqua', aqua, aquaShadow],
//   '2': ['Deep Sky Blue', deepSkyBlue, deepSkyBlueShadow],
//   '3': ['Dodger Blue', dodgerBlue, dodgerBlueShadow],
//   '4': ['Midnight Blue', midnightBlue, midnightBlue],
// }

const Wrapper = styled.div`
  padding: 25px 50px;
`;

const Header = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  border: none;
  border-radius: 5px;
  box-shadow: 1px 1px 2px ${aquaShadow};
  font-size: 1.25em;
  padding: 0.25em 0.5em;
  color: white;
  font-family: 'Cabin', sans-serif;
  font-weight: bold;
  background-color: ${aqua};
  transition: box-shadow 0.22s;
  &:hover {
    box-shadow: none;
  }
`;

const ClippedText = styled.h1`
  margin: 0;
  font-family: 'Cabin', sans-serif;
  letter-spacing: 0.05em;
  line-height: 1;
  font-weight: bold;
  font-size: 6em;
  line-height: 1.5;
  background-image: linear-gradient(
    ${bluesMap.get(0)[1]} 30%, ${bluesMap.get(1)[1]}, ${bluesMap.get(2)[1]}, ${bluesMap.get(3)[1]}, ${bluesMap.get(4)[1]} 82%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: black;
`;

const Bar = styled.div.attrs({
  backgroundColor: props => props.bg,
  boxShadow: props => props.bs
})`
  margin-bottom: 10px;
  overflow: hidden;
  background-color: ${props => props.backgroundColor};
  box-shadow: 1px 1px 2px ${props => props.boxShadow};
  font-family: sans-serif;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  color: White;
  font-weight: bold;
`;

const BarTitle = styled.h2`
  font-size: 1.75em;
  padding: 0.5em 0;
  white-space: pre;
  font-family: 'Cabin', sans-serif;
  @media(max-width: 450px) {
    font-size: 1em;
  }
`;

const params = {stiffness: 60, damping: 31}

const AnimationStaggered = () => (
  <StaggeredMotion
    defaultStyles={[{w: 0 }, {w: 0}, {w: 0}, {w: 0}, {w: 0}]}
    styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => (
      i === 0
        ? {w: spring(100, params)}
        : {w: spring(prevInterpolatedStyles[i - 1].w)}
    ))}>
    {interpolatingStyles =>
      <div>
        {interpolatingStyles.map((style, i) =>
          <Bar bg={(bluesMap.get(i)[1])}
            bs={(bluesMap.get(i)[2])}
            key={i.toString()}
            style={{width:`${style.w}%`}}>
            <BarTitle>{bluesMap.get(i)[0]} Bar</BarTitle>
          </Bar>)
        }
      </div>
    }
  </StaggeredMotion>
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    };
  }

  handleShow = () => {
    this.toggleState();
    setTimeout(this.toggleState, 200);
  };

  toggleState = () => (
    this.setState(prevState => ({show: !prevState.show}))
  );

  render() {
    return (
      <Wrapper>
        <Header>
          <ClippedText>Blue Bars</ClippedText>
          <Button type="button" onClick={this.handleShow}>repeat</Button>
        </Header>
        {this.state.show && <AnimationStaggered />}
      </Wrapper>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
