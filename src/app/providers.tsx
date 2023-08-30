import { AuthProvider } from "./contexts/auth-context"

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return <AuthProvider>
            {children}
        </AuthProvider>
}