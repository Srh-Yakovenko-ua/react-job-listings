import {Card} from '../../UI/Card';
import {Stack} from '../../UI/Stack';
import {Badge} from '../../UI/Badge';
import {useDispatch, useSelector} from 'react-redux';
import {selectFilter, removeFilter, clearFilter} from './filter-slice';


const FilterPanel = () => {
    const currentFilters = useSelector(selectFilter)
    const dispatch = useDispatch();

    if (currentFilters.length === 0) return null

    const clearFilterHandler = () => dispatch(clearFilter())
    const removeFilterHandler = (filter) => dispatch(removeFilter(filter))

    return (
        <Card className="filter-panel">
            <div className="filter-panel-wrapper">
                <Stack>
                    {currentFilters.map(filter => {
                        return (
                            <Badge key={filter}
                                   variant="clearable"
                                   onClear={() => removeFilterHandler(filter)}
                            >
                                {filter}
                            </Badge>
                        )
                    })}
                </Stack>

                <button className="link"
                        onClick={clearFilterHandler}>Clear
                </button>
            </div>
        </Card>
    )
}

export {FilterPanel};