export type GuestProps = {
  success: boolean;
  guest_session_id: string;
  expires_at: string;
  rated_movies: any;
};

export type StateType = {
  guest: GuestProps;
  theme: string;
};
