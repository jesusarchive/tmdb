import { API_KEY, BASE_URL } from '../constants';

export const getGuestSession = async (): Promise<{
  success: boolean;
  guest_session_id: string;
  expires_at: string;
}> => {
  const response = await fetch(`${BASE_URL}/3/authentication/guest_session/new?api_key=${API_KEY}`);
  const data = await response.json();

  return data;
};

export const getGuestSessionRatedMovies = async (guestSessionId: string): Promise<any> => {
  const response = await fetch(
    `${BASE_URL}/3/guest_session/${guestSessionId}/rated/movies?api_key=${API_KEY}&language=en-US&sort_by=created_at.asc`
  );
  const data = await response.json();

  return data;
};
