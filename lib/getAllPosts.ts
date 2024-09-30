interface ApiResponse {
    id: number;
    title: string;
    body: string;
    userId: number;
}

export default async function getAllPost(): Promise<ApiResponse[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    const data: ApiResponse[] = await response.json();

    return data;
}
