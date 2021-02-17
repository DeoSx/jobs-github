import jobsReducer from '../store/reducers/jobs'
import { JobState, IJobsAction, Jobs } from '../types'
import { mock } from '../__mock__'

describe('jobsReducer', () => {
  it('should return state for FETCH type', () => {
    const state: JobState = {
      positions: [],
      loading: false,
      error: null
    }
    const updateAction: IJobsAction = {
      type: Jobs.FETCH_POSITIONS
    }

    const updateState = jobsReducer(state, updateAction)

    expect(updateState).toEqual({ positions: [], loading: true, error: null })
  })

  it('should return state for FETCH_SUCCESS type', () => {
    const state: JobState = {
      positions: [],
      loading: false,
      error: null
    }

    const updateAction: any = {
      type: Jobs.FETCH_POSITIONS_SUCCESS,
      payload: [mock]
    }

    const updateState = jobsReducer(state, updateAction)

    expect(updateState).toEqual({
      positions: [mock],
      loading: false,
      error: null
    })
  })

  it('should return state for FETCH_ERROR type', () => {
    const state: JobState = {
      positions: [],
      loading: false,
      error: null
    }

    const updateAction: any = {
      type: Jobs.FETCH_POSITIONS_ERROR,
      payload: 'Something went wrong'
    }

    const updateState = jobsReducer(state, updateAction)

    expect(updateState).toEqual({
      positions: [],
      loading: false,
      error: 'Something went wrong'
    })
  })
})
