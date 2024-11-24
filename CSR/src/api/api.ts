const BASE_URL = import.meta.env.VITE_API_URL;
export const api = {
  get: async <T>(url: string): Promise<T> => {
    const response = await fetch(`${BASE_URL}${url}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  },
  post: async <T>(url: string, data: any): Promise<T> => {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  },
};
