import { mockApiCall } from '../utils/mockApiCall';
import { DataItem } from '../types/DataItem';
import { mockData } from '../mock-data/MockData';

export const dataFetcher = {
    searchFruit():Promise<DataItem[]> {
        return mockApiCall(mockData);
    }
};
