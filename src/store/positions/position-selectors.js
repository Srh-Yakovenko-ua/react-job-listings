export const selectAllPositions = (state) => state.positions

export const selectVisiblePositions = (state, filters = []) => {
    if (filters.length === 0) {
        return state.positions
    } else {
        return state.positions.filter(pos => {
            const positionsFilters = [].concat(pos.role, pos.level, ...pos.languages, ...pos.tools)

            return filters.every(filters => positionsFilters.includes(filters))
        })
    }
}