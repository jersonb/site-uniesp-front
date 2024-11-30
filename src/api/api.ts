import axios, { AxiosResponse } from 'axios';
export interface NewsResponse {
    id: string,
    title: string,
    linkImage: string,
}

const instance = axios.create({
    baseURL: 'http://localhost:5270/api'
});
const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    get: (url: string) => instance.get(url).then(responseBody),
    post: (url: string, body: {}) => instance.post(url, body).then(responseBody),
    put: (url: string, body: {}) => instance.put(url, body).then(responseBody),
    delete: (url: string) => instance.delete(url).then(responseBody),
};

export const NewsRequests = {
    getNewsList: (): Promise<NewsResponse[]> => requests.get('news'),
    getNews: (id: string): Promise<NewsResponse> => requests.get(`news/${id}`),
    createNews: (post: NewsResponse): Promise<NewsResponse> =>
        requests.post('news', post),
    updateNews: (post: NewsResponse, id: number): Promise<NewsResponse> =>
        requests.put(`news/${id}`, post),
    deleteNews: (id: number): Promise<void> => requests.delete(`news/${id}`),
};