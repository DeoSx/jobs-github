import axios from '../../utils/axios'
import { Jobs } from '../../types'

export const fetchPositions = (text: string) => {
  return async (dispatch: any) => {
    try {
      dispatch({ type: Jobs.FETCH_POSITIONS })
      const res = await axios.get(`/positions.json?description=${text}`)
      dispatch({ type: Jobs.FETCH_POSITIONS_SUCCESS, payload: res.data })
    } catch (e) {
      dispatch({
        type: Jobs.FETCH_POSITIONS_ERROR,
        payload: 'Something going wrong'
      })
      console.error(e)
    }
  }
}
