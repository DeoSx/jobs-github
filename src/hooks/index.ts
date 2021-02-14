import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'
import * as actionsCreators from '../store/actions/jobs'

const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators({ ...actionsCreators }, dispatch)
}

export default useActions
