import {JobPosition} from './JobPosition';
import {useDispatch} from 'react-redux';
import {addFilter} from '../filter/filter-slice';
import {usePositions} from './use-positions';
import {useFetchPositions} from './use-fetch-positions';


const JobList = () => {
    useFetchPositions()
    const dispatch = useDispatch()
    const positions = usePositions()

    const handlerAddFilter = (filter) => dispatch(addFilter(filter))

    return (
        <div className="job-list">
            {positions.map(item => (
                <JobPosition key={item.id}
                             handlerAddFilter={handlerAddFilter}
                             {...item} />
            ))}
        </div>
    )
}

export {JobList};