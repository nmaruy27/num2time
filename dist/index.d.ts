interface NttReturnType {
    hh: string;
    mm: string;
    ss: string;
    timeformat: string;
}
declare type formatType = 'hms' | 'hm' | 'h';
export default function num2time(number: number, format?: formatType, sep?: string): NttReturnType;
export {};
