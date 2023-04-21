import { API_KEY, BASE_URL } from '../../config/api';

export const getGuestSession = async (): Promise<{
  success: boolean;
  guest_session_id: string;
  expires_at: string;
}> => {
  const response = await fetch(`${BASE_URL}/3/authentication/guest_session/new?api_key=${API_KEY}`);
  const data = await response.json();

  return data;
};
