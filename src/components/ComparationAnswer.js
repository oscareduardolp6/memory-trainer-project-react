import { Input } from './Input'
export const ComparationAnswer = ({...rest}) => {
  const divStyle = {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '5em'
  }
  return (
    <div style={divStyle}>
      <Input {...rest} /> 
    </div>
  )
}