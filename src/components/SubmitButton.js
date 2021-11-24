import './SubmitButton.css'; 
import { palette1 } from '../style/palette'
export const SubmitButton = ({ children }) =>
  <button type="submit" style={ { backgroundColor: palette1.fifth } }>{ children }</button>