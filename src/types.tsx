export type CardTypes = {
  id: string
  type: string
  url: string
  created_at: string
  company: string
  company_url: string
  location: string
  title: string
  description: string
  how_to_apply: string
  company_logo: string
  route?: string
}

export type JobState = {
  positions: CardTypes[]
  loading: boolean
  error: null | string
}

export enum Jobs {
  FETCH_POSITIONS = 'FETCH_POSITIONS',
  FETCH_POSITIONS_SUCCESS = 'FETCH_POSITIONS_SUCCESS',
  FETCH_POSITIONS_ERROR = 'FETCH_POSITIONS_ERROR'
}

interface IFetchPositions {
  type: string
}

interface IFetchPositionsSuccess {
  type: string
  payload: CardTypes[]
}

interface IFetchPositionsError {
  type: string
  error: string | null
}

export interface IJobsAction {
  type: string
  payload: IFetchPositions | IFetchPositionsSuccess | IFetchPositionsError
}

export interface AppState {
  jobs: JobState
}
