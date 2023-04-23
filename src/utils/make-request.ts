export const makeRequest = async (input: RequestInfo | URL, init?: RequestInit): Promise<any> => {
  try {
    const response = await fetch(input, init);

    if (response.status === 404) {
      throw new Error('Page not found');
    } else if (response.status === 500) {
      throw new Error('Server error');
    } else if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);

    return null;
  }
};
