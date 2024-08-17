import { JSDriver } from './jsDriver';
import { MDDriver } from './mdDriver';

const drivers = [
    new JSDriver(),
    new MDDriver()
];

export function getDriverForFile(file: string) {
    return drivers.find(driver => driver.supports(file));
}
