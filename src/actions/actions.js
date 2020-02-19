// Step 3 - Create Action Creators

export const addFeature = feature => {
    return {
        type: 'ADD_FEATURE',
        payload: feature
    }
}

export const removeFeature = feature => {
    return {
        type: 'REMOVE_FEATURE',
        payload: feature
    }
}

export const priceAdjustment = (price) => {
    return {
        type: 'PRICE_ADJUSTMENT',
        payload: price
    }
}