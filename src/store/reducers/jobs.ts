import { JobState, IJobsAction, Jobs } from '../../types'

const initialState: JobState = {
  positions: [],
  loading: false,
  error: null
}

const jobsReducer = (state = initialState, action: IJobsAction) => {
  switch (action.type) {
    case Jobs.FETCH_POSITIONS:
      return {
        ...state,
        loading: true
      }
    case Jobs.FETCH_POSITIONS_SUCCESS: {
      return {
        ...state,
        loading: false,
        positions: action.payload
      }
    }
    case Jobs.FETCH_POSITIONS_ERROR: {
      return {
        ...state,
        loading: false,
        positions: [],
        error: action.payload
      }
    }
    default:
      return state
  }
}

export default jobsReducer
