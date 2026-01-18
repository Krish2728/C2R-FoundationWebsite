import { useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { usePaymentCancel } from '@/hooks/useQueries';
import { XCircle, Loader2, ArrowLeft } from 'lucide-react';

export default function DonationCancelPage() {
  const navigate = useNavigate();
  const params = new URLSearchParams(window.location.search);
  const sessionId = params.get('sessionId') || '';

  const { data, isLoading } = usePaymentCancel(sessionId);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-c2r-accent mx-auto mb-4" />
          <p className="text-lg text-muted-foreground">Processing...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="max-w-md w-full">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4">
            <XCircle className="h-16 w-16 text-muted-foreground" />
          </div>
          <CardTitle className="text-2xl">Donation Cancelled</CardTitle>
          <CardDescription>
            Your donation was not completed
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-center text-muted-foreground">
            No charges have been made to your account. You can try again whenever you're ready.
          </p>

          <div className="space-y-3">
            <Button
              onClick={() => navigate({ to: '/donate' })}
              className="w-full"
              size="lg"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Return to Donation Page
            </Button>
            <Button
              onClick={() => navigate({ to: '/' })}
              variant="outline"
              className="w-full"
              size="lg"
            >
              Go to Home
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
