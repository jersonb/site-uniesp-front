import axios, { AxiosResponse } from 'axios';
export interface NewsResponse {
    id: string,
    title: string,
    subtitle: string,
    linkImage: string,
    content: string
}

const instance = axios.create({
    baseURL: import.meta.env.VITE_NEWS_API
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
    createNews: (news: NewsResponse): Promise<NewsResponse> =>
        requests.post('news', news),
    updateNews: (id: string, news: NewsResponse): Promise<NewsResponse> =>
        requests.put(`news/${id}`, news),
    deleteNews: (id: string): Promise<void> => requests.delete(`news/${id}`),
};