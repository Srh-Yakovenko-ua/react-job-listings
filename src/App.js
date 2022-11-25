import {TheHeader} from './components/TheHeader';
import {FilterPanel} from './components/FilterPanel';
import {JobList} from './components/JobList';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import data from './mock/data.json'
import {addPositionsAC} from './store/positions/position-actions';

function App() {
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(addPositionsAC(data))
    })
    return (
        <>
            <TheHeader/>
            <div className="container">
                <FilterPanel/>
                <JobList/>
            </div>
        </>
    );
}

export default App;
