import { API_KEY, BASE_URL } from '../../config/api';
import { makeRequest } from '../../utils/make-request';

export type GuestSessionType = {
  success: boolean;
  guest_session_id: string;
  expires_at: string;
};

export const getGuestSession = async (): Promise<GuestSessionType | null> => {
  const url = `${BASE_URL}/3/authentication/guest_session/new?api_key=${API_KEY}`;

  return await makeRequest(url);
};
