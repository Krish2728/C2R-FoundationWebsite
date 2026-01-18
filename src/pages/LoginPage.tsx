import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useInternetIdentity } from '@/hooks/useInternetIdentity';
import { useNavigate } from '@tanstack/react-router';
import { LogIn, LogOut, User } from 'lucide-react';
import { useState } from 'react';

export default function LoginPage() {
  const { login, clear, loginStatus } = useInternetIdentity();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-c2r-primary to-c2r-secondary py-20 text-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">Login</h1>
            <p className="text-lg text-white/90">
              Access your Connect2Roots account to manage your profile and connections
            </p>
          </div>
        </div>
      </section>

      {/* Login Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-md">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">
                  {isLoggedIn ? 'Account' : 'Sign In'}
                </CardTitle>
                <CardDescription>
                  {isLoggedIn 
                    ? 'You are currently logged in' 
                    : 'Connect securely using Internet Identity'}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {isLoggedIn ? (
                  <>
                    <div className="rounded-lg bg-muted p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <User className="h-5 w-5 text-c2r-primary" />
                        <span className="font-semibold">Logged In</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        You are successfully logged in to Connect2Roots Foundation.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <Button 
                        className="w-full" 
                        variant="outline"
                        onClick={() => navigate({ to: '/' })}
                      >
                        Go to Dashboard
                      </Button>
                      <Button 
                        className="w-full" 
                        variant="destructive"
                        onClick={() => {
                          clear();
                          setIsLoggedIn(false);
                        }}
                      >
                        <LogOut className="mr-2 h-4 w-4" />
                        Sign Out
                      </Button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="space-y-4 text-sm text-muted-foreground">
                      <p>
                        Sign in to access your Connect2Roots account and manage your profile, 
                        mentorship connections, and program participation.
                      </p>
                      <ul className="space-y-2 pl-4">
                        <li>• Access your mentorship dashboard</li>
                        <li>• Manage your profile and preferences</li>
                        <li>• Track your program progress</li>
                        <li>• Connect with mentors and mentees</li>
                      </ul>
                    </div>

                    <Button 
                      className="w-full" 
                      size="lg"
                      onClick={async () => {
                        await login();
                        setIsLoggedIn(true);
                      }}
                      disabled={loginStatus === 'logging-in'}
                    >
                      {loginStatus === 'logging-in' ? (
                        'Connecting...'
                      ) : (
                        <>
                          <LogIn className="mr-2 h-4 w-4" />
                          Sign In
                        </>
                      )}
                    </Button>

                    <div className="text-center text-sm text-muted-foreground">
                      <p>
                        Don't have an account?{' '}
                        <a 
                          href="/get-involved" 
                          className="text-c2r-primary hover:underline"
                        >
                          Get involved here
                        </a>
                      </p>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>

            {!isLoggedIn && (
              <div className="mt-8 text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  New to Connect2Roots?
                </p>
                <div className="flex flex-col gap-2">
                  <Button variant="outline" onClick={() => navigate({ to: '/mentorship' })}>
                    Find a Mentor
                  </Button>
                  <Button variant="outline" onClick={() => navigate({ to: '/get-involved' })}>
                    Become a Mentor
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
