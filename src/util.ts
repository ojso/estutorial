import { readFile } from 'fs/promises';

export async function fetchData(): Promise<string> {
    return Promise.resolve('async data');
}

export async function readReadme(): Promise<string> {
    const data = await readFile('README.md', 'utf-8');
    return data;
}
