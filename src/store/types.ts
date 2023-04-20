export type GuestProps = {
  success: boolean;
  guest_session_id: string;
  expires_at: string;
};

export type StateType = {
  guestSession: GuestProps;
  theme: string;
};
