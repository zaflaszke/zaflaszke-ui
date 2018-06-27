export const getCurrentSearchCity = state => state.start.city;
export const getCurrentSearchRegion = state => state.start.region;
export const getRegions = state => state.start.regions.map(region => region.name);