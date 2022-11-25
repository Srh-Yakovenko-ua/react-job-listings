import {Card} from '../UI/Card';
import {Stack} from '../UI/Stack';
import {Badge} from '../UI/Badge';
import {useDispatch, useSelector} from 'react-redux';
import {selectFilter} from '../store/filters/filter-selector';
import {clearFilterAC, removeFilterAC} from '../store/filters/filter-action';

const FilterPanel = () => {
    const currentFilters = useSelector(selectFilter)
    const dispatch = useDispatch();

    if (currentFilters.length === 0) return null

    const clearFilter = () => dispatch(clearFilterAC)
    const removeFilter = (filter) => dispatch(removeFilterAC(filter))

    return (
        <Card className="filter-panel">
            <div className="filter-panel-wrapper">
                <Stack>
                    {currentFilters.map(filter => {
                        return (
                            <Badge key={filter}
                                   variant="clearable"
                                   onClear={() => removeFilter(filter)}
                            >
                                {filter}
                            </Badge>
                        )
                    })}
                </Stack>

                <button className="link"
                        onClick={clearFilter}>Clear
                </button>
            </div>
        </Card>
    )
}

export {FilterPanel};