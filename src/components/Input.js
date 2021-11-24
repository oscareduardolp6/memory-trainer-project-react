import './Input.css'
export const Input = ({label, ...props}) => (
  <>
    <label className="question-label">{ label }</label>
    <input { ...props} />
  </>
)