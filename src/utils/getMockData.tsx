import { DataItem } from '../mock-data/MockData';

export const getMockData = (data: DataItem[]): Promise<DataItem[]> => {
    return new Promise(resolve => {
        setTimeout(() => resolve(data), 1000)
    });
};