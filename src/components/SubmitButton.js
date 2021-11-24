import './SubmitButton.css'; 
import { palette1 } from '../style/palette'
export const SubmitButton = ({ children, ...props }) =>
  <button 
    type="submit" 
    style={{ backgroundColor: palette1.fifth }} 
    {...props}>
      { children }
    </button>