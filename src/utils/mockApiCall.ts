import { DataItem } from '../types/DataItem';

export const mockApiCall = (data: DataItem[]): Promise<DataItem[]> => {
    return new Promise(resolve => {
        setTimeout(() => resolve(data), 1000)
    });
};