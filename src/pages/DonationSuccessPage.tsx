import { useEffect } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { usePaymentSuccess } from '@/hooks/useQueries';
import { CheckCircle, Loader2, Home } from 'lucide-react';

export default function DonationSuccessPage() {
  const navigate = useNavigate();
  const params = new URLSearchParams(window.location.search);
  const sessionId = params.get('sessionId') || '';
  const accountId = params.get('accountId') || '';
  const caffeineCustomerId = params.get('caffeineCustomerId') || '';

  const { data, isLoading, error } = usePaymentSuccess(sessionId, accountId, caffeineCustomerId);

  useEffect(() => {
    if (!sessionId || !accountId || !caffeineCustomerId) {
      navigate({ to: '/donate' });
    }
  }, [sessionId, accountId, caffeineCustomerId, navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-c2r-accent mx-auto mb-4" />
          <p className="text-lg text-muted-foreground">Processing your donation...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="max-w-md w-full">
          <CardHeader>
            <CardTitle className="text-destructive">Payment Error</CardTitle>
            <CardDescription>There was an issue processing your donation</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Please contact us if you believe this is an error.
            </p>
            <Button onClick={() => navigate({ to: '/donate' })} className="w-full">
              Try Again
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <CardTitle className="text-3xl">Thank You for Your Donation!</CardTitle>
          <CardDescription className="text-lg">
            Your generosity makes a real difference
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {data && (
            <div className="bg-muted/50 rounded-lg p-6 space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Amount:</span>
                <span className="font-semibold">
                  ₹{(Number(data.payment.amount) / 100).toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Payment Method:</span>
                <span className="font-semibold">
                  {data.payment.paymentMethod.brand.toUpperCase()} •••• {data.payment.paymentMethod.last4}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Status:</span>
                <span className="font-semibold text-green-600 capitalize">
                  {data.payment.status}
                </span>
              </div>
            </div>
          )}

          <div className="text-center space-y-4">
            <p className="text-muted-foreground">
              Your donation will help empower students with mentorship, skills training, and career guidance. 
              A receipt has been sent to your email.
            </p>
            <p className="text-sm text-muted-foreground">
              Together, we're bridging the gap between talent and opportunity.
            </p>
          </div>

          <Button
            onClick={() => navigate({ to: '/' })}
            className="w-full"
            size="lg"
          >
            <Home className="h-4 w-4 mr-2" />
            Return to Home
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
