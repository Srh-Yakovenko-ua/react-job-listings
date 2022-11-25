import {JobPosition} from './JobPosition';
import {selectVisiblePositions} from '../store/positions/position-selectors';
import {useDispatch, useSelector} from 'react-redux';
import {addFilterAC} from '../store/filters/filter-action';
import {selectFilter} from '../store/filters/filter-selector';

const JobList = () => {
    const currentFilters = useSelector(selectFilter)
    const positions = useSelector((state) => selectVisiblePositions(state, currentFilters));
    const dispatch = useDispatch();

    const handlerAddFilter = (filter) => dispatch(addFilterAC(filter))

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