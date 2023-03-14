import { useSelector } from 'react-redux'
import { selectVisiblePositions } from './positions-slice'
import { selectFilter } from '../filter/filter-slice'

export const usePositions = () => {
  const currentFilters = useSelector(selectFilter)

  return useSelector((state) => selectVisiblePositions(state, currentFilters))
}
