import { Button as MUIButton } from '@mui/material';

export function Button({ children }: { children: React.ReactNode }) {
  return <MUIButton variant="contained">{children}</MUIButton>;
}